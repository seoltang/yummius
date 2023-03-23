export default function getPrompt(eventTarget: EventTarget) {
  const inputs = Object.values(eventTarget).map(
    ({ type, name, value, checked, required }) => ({
      type,
      name,
      value,
      checked,
      required,
    })
  );

  const isTypeText = (type: string) => type === "text" || type === "textarea";
  const isNameChecked = (name: string) =>
    inputs
      .filter(({ checked }) => checked)
      .map(({ name }) => name)
      .includes(name);
  const hasValue = (value: string) => !!value;

  const writtenInputs = inputs.filter(
    ({ required, type, name, value }) =>
      required || (isTypeText(type) && isNameChecked(name) && hasValue(value))
  );

  const draft = writtenInputs
    .map(({ name, value }) => `${name}: ${value}`)
    .join("\n");

  return `다음 정보를 바탕으로 맛집 리뷰를 작성해 줘.\n\n${draft}\n\n리뷰:`;
}
