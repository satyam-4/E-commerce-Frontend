"use client";

import { useEffect, useState } from "react";
import Price from "@/components/layout/Price";
import Rating from "@/components/layout/Rating";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
    params: {
        id: string
    }
};

type Seller = {
    id: number;
    businessName: string;
    sellerRating: number;
};

type Offer = {
    seller: Seller;
    price: number;
    stock: number;
};

type VariantAttributes = Record<string, string>;

type Variant = {
    id: number;
    attributes: VariantAttributes;
    offers: Offer[];
};

type Product = {
    id: number;
    name: string;
    description: string;
    images: string[];
    category: string;
    variants: Variant[];
};

export default function ProductPage({ params }: Props) {
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70&crop=false");
    const [hideOtherOffers, setHideOtherOffers] = useState<boolean>(true);


    const router = useRouter();
    const searchParams = useSearchParams();

    const dummyProduct: Product = {
        id: 123,
        name: 'Samsung Galaxy F05',
        description: `
            The latest Samsung Galaxy F05 PLS LCD display provides immersive viewing experience with 20:9 Aspect Ratio, Full HD+ Resolution with 720 x 1600 Pixels and 60Hz Refresh Rate. 5000mAh battery gives you power to use your smartphone without worrying about frequent charging. And, you get up to 2 generations of Android Upgrades with 4 years of security updates that provides you the best OS experience available for the next 2 years with Samsung One UI. Powered by MediaTek Helio G85 processor you can easily multi-task and play games with ease. Brilliant 50MP Camera with 8MP Selfie Camera, lets you capture memories beautifully which you can share with your friends & family.
        `,
        images: [
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/o/x/-original-imah59pnud5sv8nh.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/f/z/-original-imah56hkufswarff.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/g/c/-original-imah59pneh9jmegm.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/u/t/-original-imah56hkzazfm6zj.jpeg?q=70&crop=false",
            "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/q/j/-original-imah56hkhdjaynhu.jpeg?q=70&crop=false"
        ],
        category: "Mobiles",
        variants: [
            {
                id: 1,
                attributes: {
                    color: "Charcoal Black",
                    storage: "64GB"
                },
                offers: [
                    {
                        seller: {
                            id: 1345,
                            businessName: "Satyam Agency",
                            sellerRating: 4.1
                        },
                        price: 600,
                        stock: 3
                    },
                    {
                        seller: {
                            id: 45613,
                            businessName: "RetailNet",
                            sellerRating: 4.6
                        },
                        price: 549,
                        stock: 125
                    },
                ]
            },
            {
                id: 2,
                attributes: {
                    color: "Twilight Blue",
                    storage: "128GB"
                },
                offers: [
                    {
                        seller: {
                            id: 45613,
                            businessName: "RetailNet",
                            sellerRating: 4.6
                        },
                        price: 549,
                        stock: 23
                    },
                ]
            }
        ]
    }

    const attributeKeys = Array.from(new Set(
        product?.variants.flatMap((v) => {
            return Object.keys(v.attributes);
        })
    ));

    const attributeOptions: { [key: string]: string[] } = {};
    attributeKeys.forEach((key) => {
        attributeOptions[key] = Array.from(new Set (product?.variants.map((variant) => {
            return variant.attributes[key];
        })));
    });

    const updateAttribute = (key: string, value: string) => {
        console.log("key:", key, "value:", value);
        const urlParams = new URLSearchParams(searchParams.toString());
        urlParams.set(key, value);
        router.push(`?${urlParams.toString()}`, { scroll: false });
    }

    useEffect(() => {
        setProduct(dummyProduct);
        setSelectedImage(dummyProduct.images[0]);
    }, [params.id, searchParams]);

    // function isVariantValid(
    //     key: string,
    //     value: string,
    //     selectedSeller: Seller
    // ): boolean {
    //     return selectedSeller.offers.map((off) => {
    //         off.variant[key] === value;
    //     })
    // }

    return (
        <div className="p-5 flex gap-15">
            <div className="w-[600px]">
                <div className="w-full h-[500px] flex">
                    <div className="w-1/4 h-full flex flex-col justify-start items-center gap-3 overflow-y-auto">
                        {
                            product?.images.map((img, i) => (
                                <div 
                                    key={i}
                                    onClick={() => setSelectedImage(img)}
                                    className={`relative w-25 min-h-25 border-4 ${selectedImage === img ? 'border-blue-500' : 'border-zinc-200'} cursor-pointer`}
                                >
                                    <Image fill src={img} alt="productImages" className="object-contain" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="relative flex-grow h-full">
                        <Image 
                            fill
                            src={selectedImage} 
                            alt={"Samsung"}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="my-12 flex items-center justify-center gap-5">
                        <button className="flex-1 px-6 py-4 border-2 border-black rounded-md text-xl uppercase font-semibold">
                            add to cart
                        </button>
                        <button className="flex-1 px-6 py-4 border-2 border-black bg-black text-white rounded-md text-xl uppercase font-semibold">
                            buy now
                        </button>
                </div>
            </div>
            <div className="flex-grow">
                <h1 className="text-3xl font-semibold">{product?.name}</h1>
                <Rating value={4.3} reviews={573} />
                <Price originalPrice={200} discountedPrice={500} />
                <ul className="my-5 space-y-2">
                    {
                        attributeKeys.map((key, i) => (
                            <li key={i} className="flex items-center border-b-2 py-3 border-zinc-300">
                                <h2 className="flex-1/4 text-zinc-500 font-bold">{key.toUpperCase()}</h2>
                                <div className="flex-3/4 flex gap-5">
                                    {
                                        attributeOptions[key].map((value, i) => {
                                            // const valid = (index1 !== 0) && isOptionValid(key, value, Object.fromEntries(searchParams), product?.variants || []);
                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() => updateAttribute(key, value)}
                                                    // disabled={valid}
                                                    // style={{
                                                    //     border: searchParams.get(key) === value ? "solid black 2px" : "solid #ccc 2px",
                                                    //     opacity: valid ? 1 : 0.5,
                                                    // }}
                                                    className="bg-zinc-100 px-4 py-2 rounded-2xl text-black font-semibold cursor-pointer disabled:cursor-not-allowed"
                                                >
                                                    {value}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center">
                    <h3 className="flex-1/4 text-zinc-500 font-bold">
                        SELLER
                    </h3>
                    <div className="flex-3/4 flex justify-start items-center gap-2">
                        <p className="font-semibold">
                            {
                                // currentSeller?.businessName
                            }
                        </p>
                        <div className="px-2 py-1 rounded-lg flex items-center gap-1 bg-black text-white">
                            {/* <p className="text-sm">{currentSeller?.rating}</p> */}
                            <Icons.star size={12} fill="white" />
                        </div>
                    </div>
                </div>
                <button 
                onClick={() => setHideOtherOffers(prev => !prev)}
                className="cursor-pointer hover:underline">
                    {
                        hideOtherOffers
                        ? "Show other sellers"
                        : "Hide other sellers"
                    }
                </button>   
                {/* {
                    !hideOtherOffers 
                    && <ul>
                        {
                            product?.sellers.map((seller, i) => (
                                seller.sellerId !== currentSeller?.sellerId
                                && <li 
                                onClick={() => setCurrentSeller(seller)}
                                key={i}
                                className="flex items-center gap-1 cursor-pointer">
                                    <p>{seller.businessName}</p>
                                    <div className="px-2 py-1 rounded-lg flex items-center gap-1 bg-black text-white">
                                        <p className="text-sm">{seller.rating}</p>
                                        <Icons.star size={12} fill="white" />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                } */}
            </div>
        </div>
    )
}