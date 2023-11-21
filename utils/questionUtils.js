import QuestionContentItem from "@/models/questions/QuestionContentItem";
import Question from "@/models/questions/Question";
import QuestionOption from "@/models/questions/QuestionOption";

/** @param {ExamQuestion} entity */
export function convertQuestionEntity(entity) {
    return new Question({
        id: entity.id,
        test: entity.test,
        status: entity.status,

        selectType: entity.select_type,
        position: entity.position,

        answers: parseAnswer(entity.answers),
        answerDescriptionContents: parseContent(entity.answer_description),
        questionContents: parseContent(entity.question),
        options: parseOptions(entity.options),
    })
}


export function parseContent(inputTextOriginal) {
    /** @type {QuestionContentItem[]} */
    const objects = [];

    let currentText = ''; // Переменная для хранения текущего текста

    let inputText = normalizeImageLinks(inputTextOriginal);
    const lines = inputText.split('\n');

    lines.forEach(line => {
        const imageRegex = /(https:\/\/drive\.google\.com\/uc\?export=view&id=.*)/;
        const imageMatch = line.match(imageRegex);

        if (imageMatch) {
            // Если найдена ссылка на изображение, сохраняем текущий текст
            if (currentText !== '') {
                objects.push(QuestionContentItem.createText(currentText));
                currentText = ''; // Обнуляем текущий текст
            }

            // Создаем объект для изображения
            objects.push(QuestionContentItem.createImage(imageMatch[1]));

        } else {
            // Добавляем текст к текущему блоку
            currentText += line + '\n';
        }
    });

    // Проверяем, остался ли текст после последнего изображения
    if (currentText !== '') {
        objects.push(QuestionContentItem.createText(currentText.trim()));
    }

    return objects.filter(item => !!item.text || !!item.image);
}

function normalizeImageLinks(inputText) {
    const replacedString = inputText
        .replace(/https:\/\/drive\.google\.com\/file\/d\//g, 'https://drive.google.com/uc?export=view&id=')
        .replace(/\/view\?usp=sharing/g, '');

    return replacedString;
}

function parseOptions(inputText) {
    const regex = /([A-Z]\.)?\s*((\d+\.)?\s*([A-Z]\.)?)?\s*([\s\S]*?)(?=\n[A-Z\d]\.|$)/g;

    const matchedItems = [];
    let match;

    while ((match = regex.exec(inputText)) !== null) {
        const keyRegex = /^([A-Z]\.)?(\d+\.)?$/;

        let key = match.find((element) => keyRegex.test(element));
        ;
        const value = match[5].trim();

        if (!key && !value) break;

        matchedItems.push({key: !!key ? key.trim() : '', value});
    }

    return matchedItems.map(item => {
        return new QuestionOption({
            key: item.key.replace('.', '').trim(),
            contents: parseContent(item.value.trim()),
        });
    });
}

function parseAnswer(inputString) {
    if (!inputString) return [];

    // Используем регулярное выражение для удаления разделителей и служебных символов
    const cleanedString = inputString.replace(/[.,;:]/g, ',');

    return cleanedString.split(',').filter(str => !!str).map(str => str.trim());
}


export function highlightJavaKeywords(text, { simpleJava = false, additionalKeywordClasses = [] } = {}) {
    const CLASS_PLACEHOLDER = '$$class$$';
    const additionalClasses = ' ' + additionalKeywordClasses.join(' ');

    const compositeKeywordsSuffixes = [
        'statement', 'statements', 'expression', 'expressions',
        'type', 'types', 'modifier', 'modifiers', 'keyword', 'keywords',
    ];

    // Список ключевых слов Java
    const javaKeywords = [
        'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class',
        'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'false',
        'final', 'finally', 'float', 'for', 'if', 'implements', 'import', 'instanceof', 'int',
        'interface', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public',
        'return', 'short', 'static', 'non-static', 'strictfp', 'super', 'switch', 'synchronized', 'this',
        'throw', 'throws', 'transient', 'true', 'try', 'void', 'volatile', 'while',
        'var', 'record', 'yield', 'sealed', 'permits', 'non-sealed', 'open', 'module', 'requires', 'exports',
    ];

    // Список упрощенный ключевых слов Java
    const javaSimpleKeywords = [
        'abstract', 'assert', 'boolean', 'break', 'byte', 'catch', 'char',
        'const', 'double', 'enum', 'extends', 'false',
        'float', 'instanceof', 'int',
        'native', 'null',
        'short', 'static', 'non-static', 'strictfp', 'synchronized',
        'transient', 'true', 'void', 'volatile',
        'var', 'record', 'yield', 'sealed', 'non-sealed'
    ];

    function highlightJavaSpecialKeywords(match) {
        let keywords = simpleJava ? javaSimpleKeywords : javaKeywords;
        if (keywords.includes(match) ) {
            return highlightKeywords(match);
        } else {
            return match;
        }
    }

    // Функция для выделения ключевых слов в тексте
    function highlightKeywords(match) {
        return `<span class="${CLASS_PLACEHOLDER + additionalClasses}">${match}</span>`;
    }

    // Функция для выделения ключевых слов в тексте
    function highlightCompositeKeywords(match, prefix, suffix) {
        return `<span class="${CLASS_PLACEHOLDER + additionalClasses}">${prefix} <span class="keyword-suffix">${suffix}</span></span>`;
    }

    let targetText = text;

    //Заменяем ключевые слова Java на выделенные версии
    const javaExpressionRegex = /^(?=.*[0-9a-zA-Z().+*/-])(?!.*[a-zA-Z]{2,})(?!.*[0-9]{2,})[0-9a-zA-Z().+*/-]*$/g;
    targetText = targetText.replace(javaExpressionRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword java-keyword');

    //Заменяем ключевые слова Java на выделенные версии
    const javaKeywordsRegex = /(\w+)|(\([=*\-+&!~^<>]+\))/g;
    targetText = targetText.replace(javaKeywordsRegex, highlightJavaSpecialKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword java-keyword');

    // Заменяем словосочетания с ключевыми словами Java на выделенные версии
    const javaCompositeKeywordsRegex = new RegExp(`\\b(${javaKeywords.join("|")})\\s+(${compositeKeywordsSuffixes.join("|")})\\b`, "gi");
    targetText = targetText.replace(javaCompositeKeywordsRegex, highlightCompositeKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword java-keyword');

    // Заменяем вызовы методов на выделенные версии
    const methodCallRegex = /(\w+\.\w+\s*\(\))/g;
    targetText = targetText.replace(methodCallRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword method-keyword');

    // Заменяем camelCase и UpperCamelCase на выделенные версии
    const camelCaseRegex = /@*[a-zA-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*\b/g;
    targetText = targetText.replace(camelCaseRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword camel-keyword');


    // Заменяем создание экземпляров классов на выделенные версии
    const instanceCreationRegex = /(\s+\w+\s*\(\))/g;
    targetText = targetText.replace(instanceCreationRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword class-keyword');


    // Заменяем литералы
    const stringLiteralRegex = /("[\w\d\s]*")/g;
    targetText = targetText.replace(stringLiteralRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword string-keyword');
    const charLiteralRegex = /('[^']*')/g;
    targetText = targetText.replace(charLiteralRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword string-keyword');
    const numericLiteralRegex = /\b(\d+[LlFfDd])\b/g;
    targetText = targetText.replace(numericLiteralRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword num-keyword');

    // Заменяем дженерики
    const genericsRegex = /(\w*\.*\w+<+(\w*\s*,*)*>+)/g;
    targetText = targetText.replace(genericsRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword generic-keyword');

    return targetText;
}

export function convertMarkdownToHTML(text) {
    // Замена жирного текста
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Замена курсива
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Замена заголовков
    text = text.replace(/#{1,6} (.*?)(\n|$| $)/g, function(match, title) {
        const level = match.trim().split(' ')[0].length;
        return `<h${level}>${title.trim()}</h${level}>`;
    });

    // Замена списков
    text = text.replace(/(?:^|\n)(\d+\.|[-*]) (.*?)(?=\n|$)/g, function(match, marker, item) {
        const isNumbered = !isNaN(marker);
        const tag = isNumbered ? 'ol' : 'ul';
        return `<${tag}><li>${item.trim()}</li></${tag}>`;
    });

    // Замена гиперссылок
    text = text.replace(/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Замена цитат
    //text = text.replace(/>(.*?)(\n|$)/g, '<blockquote>$1</blockquote>');

    // Замена моноширинного текста
    text = text.replace(/`(.*?)`/g, '<code class="mdh-code">$1</code>');

    // Замена подчеркнутого текста
    text = text.replace(/__(.*?)__/g, '<u>$1</u>');

    // Замена зачеркнутого текста
    text = text.replace(/~~(.*?)~~/g, '<s>$1</s>');

    return text;
}