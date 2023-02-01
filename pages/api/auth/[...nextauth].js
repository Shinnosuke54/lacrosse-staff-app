import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req){
                connectMongo().catch(error => {error: "Connection Failed."})

                //ユーザがいるかどうか確認
                const result = await Users.findOne({ email : credentials.email})
                if (!result) {
                    throw new Error("ユーザ登録されていません。");
                }

                //compare()
                const checkPassword = await compare(credentials.password, result.password);

                //パスワード違った時
                if (!checkPassword || result.email !== credentials.email) {
                    throw new Error("メールアドレスかパスワードが違います。");
                }

                return result;
            }
        })
    ],

    secret: "yRBqKrpAitniTPjVtk1rqAO3ltiEzUP3gEeVRUWd3F0="
})