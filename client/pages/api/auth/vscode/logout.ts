import { NextApiRequest, NextApiResponse } from "next";

const vscodeLogout = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.redirect("vscode://NolanCassidy.n0lan/logout");
  } catch (error: any) {
    res.send(error.response.data);
  }
};

export default vscodeLogout;
