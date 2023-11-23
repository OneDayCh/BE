import * as nailProvider from "./nailProvider";

export const getNails = async (req, res) => {
  const { order, min_price, max_price } = req.query;
  const nails = await nailProvider.getNails(
    order, 
    {
      minPrice: min_price,
      maxPrice: max_price
    },
  );
  res.send(nails);
};

export const getNailDetail = async (req, res) => {
  const { nailId } = req.params;
  const nail = await nailProvider.getNailById(nailId);
  res.send(nail);
};
