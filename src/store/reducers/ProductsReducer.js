const initState = {
    products: [
        {
            id: 1, name: 'Anonymous Mask', image: 'anonymous-mask.jpg', price: 3999, discount: 40, discountPrice: 3999 - (40 / 100) * 3999, quantity: 1, desc: 'Face Mask. Wear this deformed and deranged mask and you have got Halloween fright night all sewn up. Made of Hard Plastic will fit perfectly.'
        },
        {
            id: 2, name: 'Oculus Rift', image: 'oculus-vr.jpg', price: 79990, discount: 18, discountPrice: 79990 - (18 / 100) * 79990, quantity: 1, desc: 'Rift is unlike anything you\'ve ever experienced. Whether you\'re stepping into your favorite game, watching an immersive VR movie, jumping to a destination on the other side of the world, or just spending time with friends in VR, you\'ll feel like you\'re really there.'
        },
        {
            id: 3, name: 'PS VR', image: 'ps-vr.jpg', price: 39999, discount: 18, discountPrice: 39999 - (18 / 100) * 39999, quantity: 1, desc: 'Discover a new world of unexpected gaming and entertainment experiences with PlayStation VR. Redefine your expectations of immersion in gaming with moments so intense your intuition takes over. Step into incredible virtual worlds and experience entertainment in new and extraordinary ways.'
        },
        {
            id: 4, name: 'VR Exercise Bike', image: 'vr-bike.jpg', price: 99999, discount: 9, discountPrice: 99999 - (9 / 100) * 99999, quantity: 1, desc: 'VirZOOM Virtual Reality Bike and VirZOOM Arcade games included. Play VR. Get Fit. VirZOOM is currently compatible with the Samsung GearVR (S8 or S8+), Playstation VR, Oculus Rift and HTC Vive Headsets (VR Headsets Sold Separately). The VirZOOM Bike has integrated speed and direction sensors. Includes an evolving suite of VirZOOM arcade games: Be the car in the race, the tank in battle, the pegasus in flight... on VirZOOM!'
        },
        {
            id: 5, name: 'Gaming keyboard and mouse', image: 'gamer-keyboard-mouse.jpg', price: 4350, discount: 25, discountPrice: 4350 - (25 / 100) * 4350, quantity: 1, desc: 'This gaming combo include compact mechanical keyboard, lightweight mouse, and mouse pad, The gaming keyboard adopt 61 key layout with Type C USB interface, make the most use of your extra space of desk, luminous keycap with side engrave craft, no need to worry about character fading, The lightweight mouse is designed with perforated honeycomb shell, reduce weight, easy to move smoothly. This wired mechanical gaming keyboard and mouse combo can be easily used by plugging the USB cable into your computer USB port, can compatible with PC Mac Laptop Computer which support windows 7/8/10/XP/Vista or higher version, Long USB cable length, no cable pull when moving, quick and accurate response, fancy RGB backlight, lightweight, easy to use, perfect choice for typists and gaming user.'
        },
        {
            id: 6, name: 'Gamer Headset with Microphone', image: 'red-gamer-headset.jpg', price: 12320, discount: 11, discountPrice: 12320 - (11 / 100) * 12320, quantity: 1, desc: 'If you\'re a gamer, you want the best gaming headset to help you hear every footstep, every movement, and every gunshot to ensure that you stay a step ahead of the competition.A good headset can help immerse you into a game like never before, which is why you can\'t settle for poor sound, worse comfort, and cheap headphones that fall apart on you. That is why we created the Ultimate Video Gaming Headset that offers superior sound quality, versatile connectivity, and a clear microphone to maximize your gaming experience.'
        },
        {
            id: 7, name: 'Wired Gaming Headphones', image: 'blue-game-headset.jpg', price: 6960, discount: 4, discountPrice: 6960 - (4 / 100) * 6960, quantity: 1, desc: 'High-Resolution Audio Certification: Customized oversized dynamic drivers produce high-resolution audio-only audio equipment that can produce excellent sound certification. Noise-canceling headphones reproduce your music with extended high frequencies, bringing extraordinary clarity and detail. Reduce environmental noise by up to 90%: Our team of engineers has conducted more than 100,000 tests in real scenes, which can detect and eliminate a wider range of low and medium frequency noise, such as car and aircraft engines. This earphone provides you with clarity, power and quietness, helping you to enjoy music better. The goal is to provide customers with better sound quality is our constant pursuit. Memory foam earmuffs fit your ears softly, and the headband rotating joints automatically adjust the angle of the earmuffs to suit your head shape.Provides maximum comfort and safety seal - perfect for working at home, online courses or when traveling.'
        },
        {
            id: 8, name: 'Racing Style Gaming Chair', image: 'racing-gamer-chair.jpg', price: 13999, discount: 12, discountPrice: 13999 - (12 / 100) * 13999, quantity: 1, desc: 'A racecar style gaming chair that provides luxury and comfort, whether it\'s used for intense gaming sessions and climbing to the top of the leaderboards, or long work days. With segmented padded designed to give highly contoured support when and where you need it most, this ergonomic chair is also equipped with an extendable footrest for position reinforcement Adjustable headrest and lumbar support pillows, as well as padded armrests provide all around comfort. Upholstered in bold, contrasting colors but maintains a professional look, this gamer chair can also be used as an office chair. Gaming chair includes a 275 pound weight capacity for long-lasting use.'
        },
        {
            id: 9, name: 'RGB Prism Pedestal Gaming Chair', image: 'rgb-gamer-chair.jpg', price: 25360, discount: 12, discountPrice: 25360 - (12 / 100) * 25360, quantity: 1, desc: 'Integrated 2.1 Dual Bluetooth/Wireless Audio System with headrest mounted speakers and a backrest subwoofer provide high quality audio and real-time vibration for added immersion in video games. Chair surface features RGB LED technology and lights up with over 30+ color and pattern combinations that can be controlled with the touch of a button. Great for use in the office, living room, game room, bedroom, dorm room, or your preferred gaming location.'
        },
        {
            id: 10, name: 'Extended RGB Gaming Mouse Pad', image: 'rgb-mouse-pad.jpg', price: 1670, discount: 10, discountPrice: 1670 - (10 / 100) * 1670, quantity: 1, desc: 'You can turn on the RGB light which will match up with RGB mechanical keyboard,cherry mx gaming keyboard and gaming mouse.Anti-slip base can firmly grip your desktop which ensure that every mouse movement translates into cursor movement, allowing you to enjoy the ultimate precision in the most passionate game. The gaming mouse pad is powered by USB cable. Super Glow Fiber - You can choose customizable lighting provides a distinctive appearance , Choose from 10 lighting modes : Rainbow breathing, Red , Purple ,Blue ,Cyan , Green , Yellow , Flowing Circling Motion , Colorful Circling Motion, Turn off.'
        }
    ],

    product: {}
}

function ProductsReducer(state = initState, action) {
    switch (action.type) {
        case 'PRODUCT':
            return {
                ...state,
                product: state.products.find(product => product.id === parseInt(action.id))
            }
        default:
            return state;
    }
}

export default ProductsReducer
