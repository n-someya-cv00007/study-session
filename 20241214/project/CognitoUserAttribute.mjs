export class CognitoUserAttribute {
    constructor({ Name, Value }) {
      // Q4 new CognitoUserAttribute({ Name: 'email', Value: email }); というコードが実行された時、Name と Value には何が入りますか？
      if (!Name || !Value) {
        throw new Error('Name and Value are required for CognitoUserAttribute');
      }

      this.Name = Name;
      this.Value = Value;
    }

    toJSON() {
      return {
        Name: this.Name,
        Value: this.Value,
      };
    }
  }