// MyErrorMessage 錯誤訊息元件，顯示運算錯誤等提示
function MyErrorMessage({ error }) {
  if (!error) return null; // 無錯誤時不顯示
  return (
    <div className="my-calculator-error">
      {error}
    </div>
  );
}

export default MyErrorMessage;
