const OrderInputBox = () => {
  return (
    <div>
      <input
        type="text"
        className="userInputBox"
        placeholder="사용자 이름 입력"
        name="name"
        value="이름 입력해주세요"
      />
      <input
        type="text"
        className="phoneInputBox"
        placename="사용자 전화번호 입력"
        name="userphone"
        value="번호 입력해주세요"
      />
    </div>
  );
};

export default OrderInputBox;
