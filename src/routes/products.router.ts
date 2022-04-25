/*
* david gonzalez
* my-store
*/
import express from 'express'
const router = express.Router();


router.get('/', (req, res) => {
    res.json([{
            name: 'Laptop Gamer',
            price: 23000,
        },
        {
            name: 'iPhone X3',
            price: 32000,
        }
    ]);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'iPhone X3',
        price: 32000,
    });
});


export default router