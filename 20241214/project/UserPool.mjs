export class UserPool {
    signUp(username, password, mobile, attributeList, validationData, callback) {
      // 疑似的なエラーと成功のシナリオ
      if (!username || !password || !mobile) {
        callback(new Error('Username and password are required'), null);
      } else {
        // 本来は Cognito にリクエストを送信してユーザー登録を行う

        const result = {
          username,
          attributes: attributeList.map(attr => attr.toJSON()),
        };
        callback(null, result); // 成功時
      }
    }
  }
