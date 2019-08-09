export const formatDescription = description => {
  const inlineBreak = '\\n';
  const regex = /\n/;

  const paragraphs = description
    .trim(' ')
    .replace(inlineBreak, regex)
    .trim(regex)
    .split(regex)
    .map((p, id) => ({
      id,
      content: p,
      br: true,
    }));

  paragraphs[paragraphs.length - 1].br = false;

  return paragraphs;
};
