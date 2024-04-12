function inputVarify(userData){
  for(let i = 0; i < userData.length; i++){
    if(userData[i] === ''){
      console.log(`${userData[i]} 為空`);
      return { answer: false, message: "此欄位不得為空" };
    } else {
      return { answer: true, message: "已經獲取用戶資料" };
    }
  }
}

export { inputVarify };