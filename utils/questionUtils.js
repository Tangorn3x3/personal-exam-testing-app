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


function parseContent(inputTextOriginal) {
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


export function highlightJavaKeywords(text) {
    const CLASS_PLACEHOLDER = '$$class$$';

    // Список ключевых слов Java
    const javaKeywords = [
        'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class',
        'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'false',
        'final', 'finally', 'float', 'for', 'if', 'implements', 'import', 'instanceof', 'int',
        'interface', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public',
        'return', 'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this',
        'throw', 'throws', 'transient', 'true', 'try', 'void', 'volatile', 'while'
    ];

    function highlightJavaSpecialKeywords(match) {
        if (javaKeywords.includes(match)) {
            return highlightKeywords(match);
        } else {
            return match;
        }
    }

    // Функция для выделения ключевых слов в тексте
    function highlightKeywords(match) {
        return `<span class="${CLASS_PLACEHOLDER}">${match}</span>`;
    }

    let targetText = text;

    //Заменяем ключевые слова Java на выделенные версии
    const javaKeywordsRegex = /\b\w+\b/g;
    targetText = targetText.replace(javaKeywordsRegex, highlightJavaSpecialKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword java-keyword');

    // Заменяем camelCase и UpperCamelCase на выделенные версии
    const camelCaseRegex = /\b[a-zA-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*\b/g;
    targetText = targetText.replace(camelCaseRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword camel-keyword');


    // Заменяем вызовы методов на выделенные версии
    const methodCallRegex = /(\w+\.\w+\s*\(\))/g;
    targetText = targetText.replace(methodCallRegex, highlightKeywords).replaceAll(CLASS_PLACEHOLDER, 'code-keyword method-keyword');

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

    return targetText;
}
