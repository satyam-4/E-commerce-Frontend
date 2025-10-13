import ProductCardCompact from "@/features/product/components/ProductCard/ProductCardCompact";

export default function FeaturedProduct() {
    const products = [
        {
            id: 1,
            slug: "macbook-air",
            name: "Macbook Air",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/2/v/v/-original-imagfdeqter4sj2j.jpeg?q=70&crop=false",
            originalPrice: 899.0,
            discountedPrice: 649.0,
            attributes: {
                color: ["silver", "gray"],
                ram: ["8GB", "16GB"],
                storage: ["256GB", "512GB", "1TB"],
            },
            rating: 4.7,
            reviews: 2000,
        },
        {
            id: 2,
            slug: "apple-ipad",
            name: "Apple iPad",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/tablet/r/k/q/-original-imahayyde8ugshtm.jpeg?q=70&crop=false",
            originalPrice: 400.0,
            discountedPrice: 369.0,
            attributes: {},
            rating: 4,
            reviews: 676,
        },
        {
            id: 3,
            slug: "sony-headphones",
            name: "Sony Headphones",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/i/x/x/wh-ch510-sony-original-imagz5r5qqrsfteq.jpeg?q=70&crop=false",
            originalPrice: 49.0,
            discountedPrice: 23.99,
            attributes: {
                color: ["black", "blue"], 
            },
            rating: 3.7,
            reviews: 893,
        },
        {
            id: 4,
            slug: "nikon-dslr",
            name: "Nikon DSLR",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/1/9/j/d7500-20-9-d7500-nikon-original-imah3ubrv5y2vynk.jpeg?q=70&crop=false",
            originalPrice: 315.0,
            discountedPrice: 250.0,
            attributes: {
                lens: ["18-55mm", "70-300mm"], 
            },
            rating: 3,
            reviews: 447,
        },
        {
            id: 5,
            slug: "acer-aspire-7",
            name: "Acer Aspire 7",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/u/v/-original-imahcd9cqb2hnpus.jpeg?q=70&crop=false",
            originalPrice: 600.0,
            discountedPrice: 439.67,
            attributes: {
                ram: ["8GB", "16GB"],
                storage: ["512GB", "1TB"], 
            },
            rating: 4.3,
            reviews: 1733,
        },
        {
            id: 6,
            slug: "lenovo-full-hd-monitor",
            name: "Lenovo 22 inch Full HD VA Panel Monitor",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/c/3/u/-original-imah9hc6zk6wkjcz.jpeg?q=70&crop=false",
            originalPrice: 315.0,
            discountedPrice: 250.0,
            attributes: {}, 
            rating: 3,
            reviews: 447,
        },
        {
            id: 7,
            slug: "noise-icon-buz-smartwatch",
            name: 'Noise Icon Buz 1.69" Display with Bluetooth Calling',
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/n/m/6/27-t800-ultra-smartwatch-ap036-android-ios-bexcel-yes-original-imah8bgywg4aksun.jpeg?q=70&crop=false",
            originalPrice: 49.0,
            discountedPrice: 23.99,
            attributes: {
                color: ["black", "orange", "white"],
            },
            rating: 3.7,
            reviews: 893,
        },
        {
            id: 8,
            slug: "samsung-galaxy-f05",
            name: "Samsung Galaxy F05",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70&crop=false",
            originalPrice: 315.0,
            discountedPrice: 250.0,
            attributes: {
                color: ["black", "blue"],
                storage: ["64GB", "128GB"],
            },
            rating: 3,
            reviews: 447,
        },
        {
            id: 9,
            slug: "motorola-g05",
            name: "Motorola g05",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/a/b/-original-imah83eztbdcsknu.jpeg?q=70&crop=false",
            originalPrice: 49.0,
            discountedPrice: 23.99,
            attributes: {
                color: ["black", "green"],
            },
            rating: 3.7,
            reviews: 893,
        },
        {
            id: 10,
            slug: "boat-airdopes-91",
            name: "boAt Airdopes 91 Bluetooth",
            thumbnail: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/h/l/z/-original-imahbuzznrfssfqe.jpeg?q=70&crop=false",
            originalPrice: 315.0,
            discountedPrice: 250.0,
            attributes: {}, 
            rating: 3,
            reviews: 447,
        },
    ];

    return (
        <>
            <h1 className="mt-8 mb-3 px-5 text-2xl font-bold tracking-wide">Featured Products</h1>
            <ul className="px-5 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <ProductCardCompact 
                            id={product.id} 
                            name={product.name} 
                            slug=""
                            thumbnail={product.thumbnail} 
                            rating={product.rating} 
                            reviews={product.reviews} 
                            originalPrice={product.originalPrice} 
                            discountedPrice={product.discountedPrice}
                            attributes={undefined}
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}