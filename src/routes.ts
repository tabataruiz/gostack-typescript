import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function oiNinja(request: Request, response: Response) {
  const user = createUser({
    email: "tabata@tabataruiz.com.br",
    password: "1234",
    techs: ["React", "Angular", { title: "Java", experience: 100 }],
  });

  return response.json({ message: "Oi Ninja" });
}
