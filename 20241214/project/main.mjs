import { UserPool } from './UserPool.mjs';
import { AuthService } from './AuthService.mjs';

(async () => {
  try {
    // UserPool インスタンスを作成
    const userPool = new UserPool();

    // AuthService インスタンスを作成
    const authService = new AuthService(userPool);

    console.log('authService', authService);

    // サインアップを実行
    const username = 'testuser';
    const email = 'testuser@example.com';
    const mobile = '1234567890';
    const password = 'password123';
    const customRole = 'admin';

    const result = await authService.signup(username, email, mobile, password, customRole);
    console.log('Signup successful:', result);
  } catch (err) {
    console.error('Signup failed:', err.message);
  }
})();