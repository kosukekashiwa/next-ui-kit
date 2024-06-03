import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * 画面サイズがPCかどうかを返す
 * @returns isPcSize: 画面幅960以上でtrue
 */
export const useSize = () => {
  const isPcSize = useMediaQuery("(min-width:960px)");

  return { isPcSize };
};
