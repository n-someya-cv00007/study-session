import { CognitoUserAttribute } from './CognitoUserAttribute.mjs';

export class AuthService {
  constructor(userPool) {
    this.userPool = userPool;
  }

  signup(username, email, mobile, password, customRole) {
    console.log(username);
    const attributeList = [];
    console.log('attributeList 1', attributeList); // Q1 この行の出力結果は何ですか？
    attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));
    console.log('attributeList 2', attributeList); // Q2 この行の出力結果は何ですか？
    attributeList.push(new CognitoUserAttribute({ Name: 'custom:role', Value: customRole }));
    console.log('attributeList 3', attributeList); // Q3 この行の出力結果は何ですか？

    return new Promise((resolve, reject) => {
      this.userPool.signUp(username, password, mobile, attributeList, null, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
