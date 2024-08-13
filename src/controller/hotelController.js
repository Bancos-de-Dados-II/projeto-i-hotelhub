import Hotel from "../models/Hotel.js";

const adicionarHotel = async(req, res) => {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
}

export { adicionarHotel };