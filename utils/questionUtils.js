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



function parseContent(inputText) {
  /** @type {QuestionContentItem[]} */
  const objects = [];

  let currentText = ''; // Переменная для хранения текущего текста

  const lines = inputText.split('\n');

  lines.forEach(line => {
    const imageRegex = /(https:\/\/drive\.google\.com\/uc\?export=view&id=.*)/;
    const imageMatch = line.match(imageRegex);

    if (imageMatch) {
      // Если найдена ссылка на изображение, сохраняем текущий текст
      if (currentText !== '') {
        objects.push( QuestionContentItem.createText(currentText) );
        currentText = ''; // Обнуляем текущий текст
      }

      // Создаем объект для изображения
      objects.push(  QuestionContentItem.createImage(imageMatch[1]) );

    } else {
      // Добавляем текст к текущему блоку
      currentText += line + '\n';
    }
  });

  // Проверяем, остался ли текст после последнего изображения
  if (currentText !== '') {
    objects.push( QuestionContentItem.createText(currentText.trim()) );
  }

  return objects.filter(item => !!item.text || !!item.image);
}

function parseOptions(inputText) {
  const regex = /([A-Z]\.)?\s*((\d+\.)?\s*([A-Z]\.)?)?\s*([\s\S]*?)(?=\n[A-Z\d]\.|$)/g;

  const matchedItems = [];
  let match;

  while ((match = regex.exec(inputText)) !== null) {
    const keyRegex = /^([A-Z]\.)?(\d+\.)?$/;

    let key = match.find((element) => keyRegex.test(element));;
    const value = match[5].trim();

    if (!key && !value) break;

    matchedItems.push({ key: !!key ? key.trim() : '', value });
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

