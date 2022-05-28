import { NextApiRequest, NextApiResponse } from "next";

const vscodeLogout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.redirect("vscode://n0lan.vsc/logout");
  } catch (error: any) {
    res.send(error.response.data);
  }
};

export default vscodeLogout;
