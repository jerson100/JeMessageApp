// import { UserModel } from "@/models/User.model";
// import { NextApiRequest, NextApiHandler } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prismaclient from "@/lib/prismadb";

export const POST = async (req: Request) => {
  const method = req.method;
  console.log(method);
  try {
    if (method === "POST") {
      const { name, email, password } = await req.json();
      if (!name && !email && !password) {
        return NextResponse.json(
          {
            message: "Please provide name, email and password",
          },
          { status: 400 }
        );
      } else {
        const existsUser = await prismaclient.user.findUnique({
          where: {
            email: email,
          },
        });
        if (existsUser) {
          return NextResponse.json(
            {
              message: "User already exists",
            },
            {
              status: 400,
            }
          );
        }
        const newUser = await prismaclient.user.create({
          data: {
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
          },
        });
        const { password: p, ...user } = newUser;
        return NextResponse.json(user, {
          status: 201,
        });
      }
    } else {
      return NextResponse.json(
        {
          message: "Method not allowed",
        },
        { status: 405 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};
