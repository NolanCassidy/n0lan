import { NextApiRequest, NextApiResponse } from "next";

const vscodeInsidersLogout = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    res.redirect("vscode-insiders://n0lan.vsc/logout");
  } catch (error: any) {
    res.send(error.response.data);
  }
};

export default vscodeInsidersLogout;
