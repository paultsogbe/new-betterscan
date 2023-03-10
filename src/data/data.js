export const COLLECTION_CHUNK = 10;
export const TOKEN_CHUNK = 50;

export function getHomeData() {
    return Promise.resolve({
        extensionBar: {
            isExtensionInstalled: false,
        },
        topBar: {
            language: "fr-FR",
        },
        stats: {
            ethPrice: "1600 $", // in $
            averageTransactionFee: 50, // in $ cents
            gazPrice: "0,50 (15gwei)", // in GWEI
            lastBlock: "16 50500",
            lastBlockTime: "2023-02-22T11:00:33.793Z",
            emission: "-1.13ETH/min", // in ETH/min
            maxEmissionScale: 2.5,
        },
        collectionsFirstChunk: {
            byTrend: [
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 185400000300600500, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1526000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 204000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e05d1e09349d7fb36c7970e7ac0e054c.png?auto=format&w=256",
                    name: "MG Land",
                    floorPrice: 385000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=1200",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 82000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/b0b96ad523d7dabe189b8e741490b928.jpg?auto=format&w=256",
                    name: "Utopia Avatars Official",
                    floorPrice: 219000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8?auto=format&w=256",
                    name: "Cool Cats NFT",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0?auto=format&w=256",
                    name: "Meebits",
                    floorPrice: 345000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/e688e61ad958efef422db10e6f1e8074.png?auto=format&w=256",
                    name: "OwnPass",
                    floorPrice: 36000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/48659e783c3762feb7bcb367db49bf84.png?auto=format&w=256",
                    name: "The Sandbox Voxel Madness LAND Sale",
                    floorPrice: 182000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/2aa63f01a6447bc1ada491295fe9c56b.png?auto=format&w=256",
                    name: "DigiDaigaku Dragon Eggs",
                    floorPrice: 23000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/bde660047ec7e69ee6b74174d63cf1ff.gif?auto=format&w=256",
                    name: "Meka Drivers",
                    floorPrice: 414000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/4ae16780d5a69645c4fe08afc91d218c.jpg?auto=format&w=256",
                    name: "MThe Verification Of Man",
                    floorPrice: 351000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/UA7blhz93Jk6GHmFA_q7lLFVrnaIJcVSIQlAh9-c4KzTC28Ewt7xlcTbqHjc1Znd6j16Rg10SVkbY2WzHckG5FD4kQ2WE6GTnPE0Lw?auto=format&w=256",
                    name: "Underground Pass",
                    floorPrice: 468000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw?auto=format&w=1920",
                    name: "Underground Pass",
                    floorPrice: 259000000000000000, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/ACV_EFtAaBzWx14Ui35U3qy3fGx-A7d5-vZHCULMWtO9ZfJD2ctgk8LR6_DCtEcEfCt8hqeJ_oPxmqU3v-h4zMpbHNai5KyW4DMA?auto=format&w=256",
                    name: "Roo Troop",
                    floorPrice: 1399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/840f358082eab670e5da14827fc52082.jpg?auto=format&w=256",
                    name: "Life In West America by Roope Rainisto",
                    floorPrice: 925000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fd8b52c0f67c10d595e8057c37ba9e95.jpg?auto=format&w=256",
                    name: "SupDucks",
                    floorPrice: 175000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=828",
                    name: "Shrapnel Operators Collection",
                    floorPrice: 6000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gcs/files/864dce41a43d14e0c083ad9434cb8261.png?auto=format&w=256",
                    name: "Checks - VV Edition",
                    floorPrice: 227000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/eGfG2L-loYOTCffvLe24RrAaQ_7zr0_MIuH0gYR0QFlBwrlEt0rlFm7zDQNZOFzN1LP7clqAJsm09JDkvc2GL824ow-hc9JyeVI9RQ?auto=format&w=256",
                    name: "Behind Their Eyes",
                    floorPrice: 125000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/f405d6a5567fab19f4f42bc70cb53a32.jpg?auto=format&w=256",
                    name: "Black Is Beautiful NFT",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/5cafab7fc41de1bf43b533290a693ef8.jpg?auto=format&w=256",
                    name: "WEIRD NARRATIVE",
                    floorPrice: 5000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/6ev2GVLx3BDJq89890xrLuoS6kNT7P0CYej5RlaV5nmP7Q6WUEsF5N_otpCVVz1vP6TGw7IDJ68JZ4kKdOnQKyK-6xLmNgGsHr3vCN0?auto=format&w=256",
                    name: "CLASSIC EBONY",
                    floorPrice: 58000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/9EPP0IGrMUgR8FgFd-RTo4epMm55JMI9C7mT9s5i-LggtVq_HHY9qYJFqw_z747_KlX4DWoevR8HDRChHyJVMsF09k1wrhrjb83uPg?auto=format&w=256",
                    name: "THE OVERSEERS",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/607ab862a5daf3be9bfbd36578f109ca.png?auto=format&w=256",
                    name: "BDREAMERS EDITIONS BY LAURENT CASTELLANI",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FT8RdW-T7bo3Tyg2ElUxS9BqmZypSw8Je_UMD9PcQBGUlnnsw6m5LPuXQZEBDZ_LrOHOdji8P54I-I00eSUh75dYBkN3puTp7s0F?auto=format&w=1920",
                    name: "First Day Out by DrifterShoots",
                    floorPrice: 33000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gcs/files/2ded2ccc5e59c4444f3386d2431d4057.gif?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 78000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/66d452e2dba43f8ba6d5d79d83cc7b08.png?auto=format&w=256",
                    name: "10KTF Combat Gear",
                    floorPrice: 26000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0tM6wrF0VmfVUOpVmpeAnPJC4nOdZqIhRoHENwE7pxsu_0i4DJ66pWRd_jRAUJf2_yJJx3U10wXfh24-Z3cebAp1NgH1iHpiMP04Qw?auto=format&w=256",
                    name: "The Metascapes",
                    floorPrice: 9000000000000000, // WEI
                    currency: "ETH",
                },
                // -------------------------------------------------------------------------------------------------------
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/0c59e4a4e1aa28525e1bc94ef44974a0.png?auto=format&w=1920",
                //     name: "A Punk In A CROWD",
                //     floorPrice: 4000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/dc6f0c6b501390e430c509c80b92a5f7.gif?auto=format&w=256",
                //     name: "MadBalls",
                //     floorPrice: 1345000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/0afe3f84f015204c13a0c76176b6197c.png?auto=format&w=1920",
                //     name: "The News",
                //     floorPrice: 195000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/a1cb29951fb8d87a9ba6bbb955543db6.png?auto=format&w=256",
                //     name: "Vintage Vibes",
                //     floorPrice: 19000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/343ed921621ef8a7cb0a8a550c809422.png?auto=format&w=256",
                //     name: "Beramonium Chronicles: Genesis",
                //     floorPrice: 496000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/18aa6fc714987fcfbac1f9d7f0e63f9f.png?auto=format&w=256",
                //     name: "OnChainBandits",
                //     floorPrice: 9000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/498b0e830344cd420b80c3ae1161c3ca.png?auto=format&w=256",
                //     name: "Savage Nation",
                //     floorPrice: 69000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/56b1d1d05bc919f3c4b6b04e47b94876.jpg?auto=format&w=256",
                //     name: "Mayfair Witches Pass",
                //     floorPrice: 325000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/86ce94827a5e991b18f382577fd00281.png?auto=format&w=256",
                //     name: "Checks - VV Originals",
                //     floorPrice: 9478000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/195f7b851ee07b4003dd90dfa445fcf4.gif?auto=format&w=256",
                //     name: "Beep Boop Battery",
                //     floorPrice: 87000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/7ba37a9f9f8bc8752d9f4c89bb061c3e.jpg?auto=format&w=256",
                //     name: "Bowels",
                //     floorPrice: 190000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/889cc00adcc4c7b75517e94eff86edf4.png?auto=format&w=256",
                //     name: " AppliedPrimate Allegiance Pass",

                //     floorPrice: 20000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/eeca2d97ba6d4936c8d71951434f7fab.png?auto=format&w=256",
                //     name: "McPepe's",
                //     floorPrice: 1000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/c2ab3e61f106547d9f3e4f567a940ae8.gif?auto=format&w=256",
                //     name: "Beep Boop Toolbox",

                //     floorPrice: 11000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/26141a0e43c3060d6471b4a1f7b8b58a.jpg?auto=format&w=256",
                //     name: "Khuga by Khuga Labs",
                //     floorPrice: 479000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/ce84942656d53eabd17878bfddabf2ad.png?auto=format&w=256",
                //     name: "Notable Pepes",
                //     floorPrice: 169000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/ff4121359d395192bc0a8612ba2ff620.png?auto=format&w=256",
                //     name: "Ghost Boy",
                //     floorPrice: 95000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/337438f4956f245b1e0599be5d15b9dd.jpg?auto=format&w=256",
                //     name: " Little Tinas Fantasy",

                //     floorPrice: 95000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/f1273e4adc887cec40bb92952ca047d2.gif?auto=format&w=256",
                //     name: "Ordinal Kubz",
                //     floorPrice: 105000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/866691c691d0426769120db411b57e86.png?auto=format&w=256",
                //     name: "Pudgy Rods",
                //     floorPrice: 64000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/M3yJrT9TRLmE8sZb8TjyAbDJYBCoCWFFXGXd61G7d5pDESUPfGVocjmg4V9JlyGCr9ENri36cisKdagm6h86548W5hmCva2kQ2rC_Q?auto=format&w=256",
                //     name: "Moonbirds Oddities",
                //     floorPrice: 7645000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/5bdbb7592c5ea7aa724273b2a0042b07.png?auto=format&w=256",
                //     name: "goodboiborzoi",
                //     floorPrice: 45000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/3fe7db6e009071c897813977dbc04eeb.gif?auto=format&w=256",
                //     name: "Hoshiboshi Aries",
                //     floorPrice: 7000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                //     name: "Parallel Alpha",
                //     floorPrice: 215000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/ba34aa60a236e395e25e57f1764eb161.png?auto=format&w=256",
                //     name: "Super PUMA",
                //     floorPrice: 1599000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/242ab2d9fd6ac79702e0a7d5a4057d13.gif?auto=format&w=256",
                //     name: "Kubz Relic",
                //     floorPrice: 169000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://openseauserdata.com/files/063c6b80d3579c55dab5e8810be458d5.svg",
                //     name: "MERGE VV",
                //     floorPrice: 399000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/dc436ed13da225aed5280b3809a1ed25.png?auto=format&w=256",
                //     name: "Moonie Moo Genesis",
                //     floorPrice: 45000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/f3ef7c5fd71980c8a46af5c905788678.png?auto=format&w=256",
                //     name: "The Ordinal War",
                //     floorPrice: 107000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/259e052f055ca1b75dfee782a87d1a6a.png?auto=format&w=256",
                //     name: "IROIRO",
                //     floorPrice: 105000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/beabfabb47c6baeb6008f21bc0681986.jpg?auto=format&w=256",
                //     name: "Honey Comb",
                //     floorPrice: 703000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/PEYPQ6DAsQ32thsNZQzpVZF_gZld7XugOTjxiMBriLCpIaKsphg0rnWNYWeWjf4_NbhPcKyO84NkudomjjMxpyYlBXkATzTxWyIeFw?auto=format&w=256",
                //     name: "MoonQuacks",
                //     floorPrice: 64000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/525a6461d2b6a9f0627f8dfbdb72fb80.gif?auto=format&w=256",
                //     name: "Memo Angeles Presents: The Killa Chronicles",
                //     floorPrice: 389000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/a8aab35915153f8b4092859deffd227f.png?auto=format&w=256",
                //     name: "Chungos",
                //     floorPrice: 539000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/3350d929b12b7ced5670c31c407150e3.jpg?auto=format&w=256",
                //     name: "JOMOHippo",
                //     floorPrice: 5000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/bcc2d75b60468d896069aa3daa16d76f.gif?auto=format&w=256",
                //     name: "Dream Girls | By Kyu Yong Eom",
                //     floorPrice: 294000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/f75d772fba8058dbbbefbc0578bae807.png?auto=format&w=256",
                //     name: "Base, Introduced",
                //     floorPrice: 29000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/7a4d21554f653f67b7cedbfe5374c06c.png?auto=format&w=256",
                //     name: "Cells",
                //     floorPrice: 13000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/f5d54660f3addfb920a17b4128d4e804.jpg?auto=format&w=256",
                //     name: "MISTFITS PROJECT",
                //     floorPrice: 19000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/7884c2064811dea220a5d1bac40c51e9.png?auto=format&w=1920",
                //     name: "FOOD FOR DEGENS",
                //     floorPrice: 109000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                //     name: "VeeFriends",
                //     floorPrice: 445000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                //     name: "Pudgy Penguins",
                //     floorPrice: 56789000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/c49d2493f2ef4a40a5306fdf1f5c6b43.png?auto=format&w=256",
                //     name: "The Captainz",
                //     floorPrice: 539000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://openseauserdata.com/files/8595bd0173f42bd2cb2b5bc451925e91.svg",
                //     name: "Urbit ID: Galaxy",
                //     floorPrice: null, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/8987b795655076fdf8183a7daee3754a.gif?auto=format&w=256",
                //     name: "Terraforms by Mathcastles",
                //     floorPrice: 232000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/jsfhye5yrhOSusDCKXquKoMQbYs-B8Nm3V2B5fZB-Hee9ag9MXwm8scvd8wuSpp8TE49oXBcWr4XMCRfzq1OA3p59s59hn_9bCzURA?auto=format&w=256",
                //     name: "KILLABEARS",
                //     floorPrice: 3469000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/74096ecd2c3119eca2bf0f59a3921455.gif?auto=format&w=256",
                //     name: "Kanpai Pandas",
                //     floorPrice: 193000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/88f6c5c0a0d59c2ea88d1218d4c71d98.png?auto=format&w=256",
                //     name: "Alpha Prestige - Fusionist",
                //     floorPrice: 72000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gcs/files/129b97582f0071212ee7cf440644fc28.gif?auto=format&w=256",
                //     name: "The Potatoz",
                //     floorPrice: 229000000000000000, // WEI
                //     currency: "ETH",
                // },
                // {
                //     imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                //     name: "Doodles",
                //     floorPrice: 5099000000000000000, // WEI
                //     currency: "ETH",
                // },
                // -------15---------------------------------------------------------------------
            ],
            allTime: [
                {
                    imgUrl: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&w=256",
                    name: "CryptoPunks",
                    floorPrice: null, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256",
                    name: "Bored Ape Yacht Club",
                    floorPrice: 775000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256",
                    name: "Mutant Ape Yacht Club",
                    floorPrice: 16199000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/yIm-M5-BpSDdTEIJRt5D6xphizhIdozXjqSITgK4phWq7MmAU3qE7Nw7POGCiPGyhtJ3ZFP8iJ29TFl-RLcGBWX5qI4-ZcnCPcsY4zI?auto=format&w=256",
                    name: "Otherdeed for Otherside",
                    floorPrice: 2000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&w=256",
                    name: "Azuki",
                    floorPrice: 1515000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&w=256",
                    name: "CLONE X - X TAKASHI MURAKAMI",
                    floorPrice: 15243000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75?auto=format&w=256",
                    name: "Moonbirds",
                    floorPrice: 65555000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=256",
                    name: "Doodles",
                    floorPrice: 565000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/c4dfc6be4d9c5d4f073de2efe181416a.jpg?auto=format&w=256",
                    name: "Bored Ape Kennel Club",
                    floorPrice: 77000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/SXH8tW1siikB80rwCRnjm1a5xM_MwTg9Xl9Db6mioIk9HIlDM09pVoSR7GKJgS6ulSUpgW9BDtMk_ePX_NKgO9A?auto=format&w=256",
                    name: "The Sandbox",
                    floorPrice: 843000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/hbe_-yi5K_UjPXiGj8IlxsR6ZMOy9AZs17vcCLIEbvS5Q7VaPCM7JwYmAioddCJ71rnEu_b11Dcyn2JXzhetqloLgHgnSrtJ3sRP?auto=format&w=256",
                    name: "Elemental by Fang Lijun",
                    floorPrice: 1123000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3d5365caab0a25b656daa3bfceecadb6.jpg?auto=format&w=256",
                    name: "MechMindsAI",
                    floorPrice: 699000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&w=256",
                    name: "BEANZ Official",
                    floorPrice: 16196000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&w=256",
                    name: "Pudgy Penguins",
                    floorPrice: 54999000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw?auto=format&w=256",
                    name: "Rarible",
                    floorPrice: 0, // WEI
                    currency: "ETH",
                },

                // ---15-----
                {
                    imgUrl: "https://i.seadn.io/gae/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F?auto=format&w=256",
                    name: "World of Women",
                    floorPrice: 2079000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/g-NFUWjS4IGgym8PHBxyhg5-G_B4x-IHgPKRkxo00JQFE3LOd-95yU2uhrokITVmV7KHEav6OMfAhfJ4roC5hwP-0tI9dMRd9wQLdw?auto=format&w=256",
                    name: "Loot (for Adventurers)",
                    floorPrice: 559000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Nnp8Pdo6EidK7eBduGnAn_JBvFsYGhNGMJ_fHJ_mzGMN_2Khu5snL5zmiUMcSsIqtANh19KqxXDs0iNq_aYbKC5smO3hiCSw9PlL?auto=format&w=256",
                    name: "Parallel Alpha",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo?auto=format&w=256",
                    name: "CrypToadz by GREMPLIN",
                    floorPrice: 127000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: " https://i.seadn.io/gae/0cOqWoYA7xL9CkUjGlxsjreSYBdrUBE0c6EO1COG4XE8UeP-Z30ckqUNiL872zHQHQU5MUNMNhfDpyXIP17hRSC5HQ?auto=format&w=256",
                    name: "ENS: Ethereum Name Service",
                    floorPrice: 14000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY?auto=format&w=256",
                    name: "Decentraland",
                    floorPrice: 1000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/0qG8Y78s198F2GZHhURw8_TEfxFlpS2XYnuLV_OW6TJin5AV1G2WOSpcLGnEmv5g2gZ6R6Pxjd4v1DP2p0bxptckM6ZJ3cMIvQmrgDM?auto=format&w=256",
                    name: "Chromie Squiggle by Snowfro",
                    floorPrice: 13000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg?auto=format&w=256",
                    name: "VeeFriends",
                    floorPrice: 507000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/Mf4vImKbzrJUcj7f7RZNOl9iZSEEJgkvpiUp9ugXc9dcpxFe6fvVgxYcRmTI1PnvfL_X1bD3mH4e66j6aJhqLEYm0vvpC8Jy8XJNZOI?auto=format&w=256",
                    name: "Bored Ape Chemistry Club",
                    floorPrice: 1855000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/3f76da086f4bbd07d8e6cdac14e3c02f.png?auto=format&w=256",
                    name: "HAPE PRIME",
                    floorPrice: 3289000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/gp39NTyxBPazqowYV9XTFxAU4eNk1i7FlmonHW4Zr7eS9UxEvrZ7f04rOLEhDxcuGxsbUx1Rm_N6Ky_Dp4A1ZQYHFAaEWj5YdBF0qg?auto=format&w=256",
                    name: "RTFKT - MNLTH",
                    floorPrice: 35000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/ae70936496054650faf8ee38a7cab5e8.png?auto=format&w=256",
                    name: "FFidenza by Tyler Hobbs",
                    floorPrice: 733000000000000000, // WEI
                    currency: "ETH",
                },

                {
                    imgUrl: "https://i.seadn.io/gae/J2iIgy5_gmA8IS6sXGKGZeFVZwhldQylk7w7fLepTE9S7ICPCn_dlo8kypX8Ju0N6wvLVOKsbP_7bNGd8cpKmWhFQmqMXOC8q2sOdqw?auto=format&w=256",
                    name: "MAD about crypto street-art",
                    floorPrice: 14399000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gae/cb_wdEAmvry_noTfeuQzhqKpghhZWQ_sEhuGS9swM03UM8QMEVJrndu0ZRdLFgGVqEPeCUzOHGTUllxug9U3xdvt0bES6VFdkRCKPqg?auto=format&w=256",
                    name: "goblintown.wtf",
                    floorPrice: 599000000000000000, // WEI
                    currency: "ETH",
                },
                {
                    imgUrl: "https://i.seadn.io/gcs/files/fb08eacd7e9c4f21303e5d771eb4a2eb.png?auto=format&w=256",
                    name: "NFT Worlds",
                    floorPrice: 13499000000000000000, // WEI
                    currency: "ETH",
                },
                // -------15-------
            ],
        },

        tokensFirstChunk: {
            byMarketCap: [
                {
                    name: "Tether USD",
                    symbol: "USDT",
                    lastPrice: 1.001, // in $
                    holders: 4065162,
                    capitalizationOnEthereum: 39862942964.85, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 5104549131.62, // in $
                },
                {
                    name: "USD Coin ",
                    symbol: "USDC",
                    lastPrice: 0.999, // in $
                    holders: 1620079,
                    capitalizationOnEthereum: 46553638094.91, // in $
                },
                {
                    name: "Binance USD ",
                    symbol: "BUSD",
                    lastPrice: 1.0, // in $
                    holders: 176379,
                    capitalizationOnEthereum: 17574339076.92, // in $
                },
                {
                    name: "OKB ",
                    symbol: "OKB",
                    lastPrice: 49.69, // in $
                    holders: 50750,
                    capitalizationOnEthereum: 14907000000.0, // in $
                },
                {
                    name: "Matic Token ",
                    symbol: "MATIC",
                    lastPrice: 1.3557, // in $
                    holders: 589771,
                    capitalizationOnEthereum: 13557342493.28, // in $
                },
                {
                    name: "HEX ",
                    symbol: "HEX",
                    lastPrice: 0.0594, // in $
                    holders: 320645,
                    capitalizationOnEthereum: 34323524926.68, // in $
                },
                {
                    name: "stETH ",
                    symbol: "stETH",
                    lastPrice: 1641.39, // in $
                    holders: 165500,
                    capitalizationOnEthereum: 3042495276.51, // in $
                },

                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "SHIBA INU ",
                    symbol: "SHIB",
                    lastPrice: 0.0, // in $
                    holders: 1311123,
                    capitalizationOnEthereum: 12909894573.01, // in $
                },
                {
                    name: "ANY Litecoin ",
                    symbol: "anyLTC",
                    lastPrice: 94.9455, // in $
                    holders: 15,
                    capitalizationOnEthereum: 6836.08, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Theta Token ",
                    symbol: "THETA",
                    lastPrice: 5.2667, // in $
                    holders: 28146,
                    capitalizationOnEthereum: 5266695404.45, // in $
                },
                {
                    name: "Uniswap ",
                    symbol: "UNI",
                    lastPrice: 6.9, // in $
                    holders: 370244,
                    capitalizationOnEthereum: 69000000000.0, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Dai Stablecoin ",
                    symbol: "DAI",
                    lastPrice: 1.0, // in $
                    holders: 499907,
                    capitalizationOnEthereum: 9799652329.0, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Wrapped BTC ",
                    symbol: "WBTC",
                    lastPrice: 24171.0, // in $
                    holders: 64469,
                    capitalizationOnEthereum: 6328306194.0, // in $
                },
                {
                    name: "ChainLink Token ",
                    symbol: "LINK",
                    lastPrice: 7.46, // in $
                    holders: 651770,
                    capitalizationOnEthereum: 7460000000.0, // in $
                },
                {
                    name: "Wrapped TON Coin ",
                    symbol: "TONCOIN",
                    lastPrice: 2.39, // in $
                    holders: 5721,
                    capitalizationOnEthereum: 17558629.73, // in $
                },
                {
                    name: "Bitfinex LEO Token ",
                    symbol: "LEO",
                    lastPrice: 3.33, // in $
                    holders: 2611,
                    capitalizationOnEthereum: 2197800000000.0, // in $
                },
                {
                    name: " Lido DAO Token",
                    symbol: "LDO",
                    lastPrice: 2.8, // in $
                    holders: 31605,
                    capitalizationOnEthereum: 2800000000.0, // in $
                },
                {
                    name: "NEAR ",
                    symbol: "NEAR",
                    lastPrice: 2.46, // in $
                    holders: 1019,
                    capitalizationOnEthereum: 966536.36, // in $
                },
                {
                    name: "VeChain ",
                    symbol: "VEN",
                    lastPrice: 0.0291, // in $
                    holders: 46185,
                    capitalizationOnEthereum: 29074903.36, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Cronos Coin ",
                    symbol: "CRO",
                    lastPrice: 0.0835, // in $
                    holders: 292875,
                    capitalizationOnEthereum: 8349200000.0, // in $
                },
                {
                    name: "ApeCoin ",
                    symbol: "APE",
                    lastPrice: 5.52, // in $
                    holders: 113453,
                    capitalizationOnEthereum: 5520000000.0, // in $
                },
                {
                    name: "Quant ",
                    symbol: "QNT",
                    lastPrice: 133.29, // in $
                    holders: 117593,
                    capitalizationOnEthereum: 6060296430.0, // in $
                },
                {
                    name: "Graph Token ",
                    symbol: "GRT",
                    lastPrice: 0.1594, // in $
                    holders: 136173,
                    capitalizationOnEthereum: 1641280448.94, // in $
                },
                // -----------------------------------------------------------------------------
                {
                    name: "chiliz ",
                    symbol: "CHZ",
                    lastPrice: 0.1359, // in $
                    holders: 175973,
                    capitalizationOnEthereum: 1208248888.77, // in $
                },
                {
                    name: "Wrapped Decentraland M ",
                    symbol: "wMANA",
                    lastPrice: 0.6787, // in $
                    holders: 0,
                    capitalizationOnEthereum: 21201765.23, // in $
                },
                {
                    name: "[FCT]FimaChain Token ",
                    symbol: "FCT",
                    lastPrice: 0.0725, // in $
                    holders: 12707,
                    capitalizationOnEthereum: 43490400.0, // in $
                },
                {
                    name: "1INCH Token ",
                    symbol: "1INCH",
                    lastPrice: 0.6388, // in $
                    holders: 103491,
                    capitalizationOnEthereum: 958141500.0, // in $
                },
                {
                    name: "Linear Token ",
                    symbol: "LINA",
                    lastPrice: 0.0133, // in $
                    holders: 13893,
                    capitalizationOnEthereum: 132738300.0, // in $
                    volume: 138238862.0, // in $
                },
                {
                    name: "Uniswap ",
                    symbol: "UNI",
                    lastPrice: 6.76, // in $
                    holders: 370261,
                    capitalizationOnEthereum: 6760000000.0, // in $
                },
                {
                    name: "GreenMetaverseToken",
                    symbol: "GMT",
                    lastPrice: 0.4228, // in $
                    holders: 10422,
                    capitalizationOnEthereum: 24559499.05, // in $
                },
                {
                    name: "VaChain ",
                    symbol: "VEN",
                    lastPrice: 0.0283, // in $
                    holders: 46185,
                    capitalizationOnEthereum: 28285133.68, // in $
                },
                {
                    name: "UMA Voting Token v1 ",
                    symbol: "UMA",
                    lastPrice: 2.29, // in $
                    holders: 20224,
                    capitalizationOnEthereum: 243186762.97, // in $
                },
                {
                    name: "WQtum ",
                    symbol: "WQTUM",
                    lastPrice: 3.603, // in $
                    holders: 41,
                    capitalizationOnEthereum: 388488608.1, // in $
                },
                // --------------------------------
                {
                    name: "NXM",
                    symbol: "NXM",
                    lastPrice: 45.21, // in $
                    holders: 4089,
                    capitalizationOnEthereum: 311542110.0, // in $
                },
                {
                    name: "Wootrade Network ",
                    symbol: "WOO",
                    lastPrice: 0.185, // in $
                    holders: 14010,
                    capitalizationOnEthereum: 555111000.0, // in $
                },
                {
                    name: "GALA ",
                    symbol: "GALA",
                    lastPrice: 0.0387, // in $
                    holders: 212730,
                    capitalizationOnEthereum: 1425515748.98, // in $
                },
                {
                    name: "Olympus ",
                    symbol: "OHM",
                    lastPrice: 10.26, // in $
                    holders: 6137,
                    capitalizationOnEthereum: 117404513.1, // in $
                },
                {
                    name: "Blur ",
                    symbol: "BLUR",
                    lastPrice: 0.6926, // in $
                    holders: 44084,
                    capitalizationOnEthereum: 2077734000.0, // in $
                },
                {
                    name: "Amp ",
                    symbol: "AMP",
                    lastPrice: 0.0049, // in $
                    holders: 94866,
                    capitalizationOnEthereum: 489127326.67, // in $
                },
                {
                    name: "Gnosis ",
                    symbol: "GNO",
                    lastPrice: 103.42, // in $
                    holders: 17317,
                    capitalizationOnEthereum: 1034200000.0, // in $
                },
                {
                    name: "SSV Token",
                    symbol: "SSV",
                    lastPrice: 37.16, // in $
                    holders: 2693,
                    capitalizationOnEthereum: 409058060.36, // in $
                },
                {
                    name: "Injective Token ",
                    symbol: "INJ",
                    lastPrice: 3.33, // in $
                    holders: 12082,
                    capitalizationOnEthereum: 333000000.0, // in $
                },
                {
                    name: "Balancer ",
                    symbol: "BAL",
                    lastPrice: 6.42, // in $
                    holders: 45521,
                    capitalizationOnEthereum: 306619200.0, // in $
                },
                {
                    name: "HarmonyOne",
                    symbol: "ONE",
                    lastPrice: 0.0193, // in $
                    holders: 195,
                    capitalizationOnEthereum: 240770766.1, // in $
                },
            ],

            // ------------------------------------
            byVolume: [
                {
                    name: "Tether USD",
                    symbol: "USDT",
                    lastPrice: 1.001, // in $
                    holders: 4065162,
                    capitalizationOnEthereum: 39862942964.85, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 5104549131.62, // in $
                },
                {
                    name: "USD Coin ",
                    symbol: "USDC",
                    lastPrice: 0.999, // in $
                    holders: 1620079,
                    capitalizationOnEthereum: 46553638094.91, // in $
                },
                {
                    name: "Binance USD ",
                    symbol: "BUSD",
                    lastPrice: 1.0, // in $
                    holders: 176379,
                    capitalizationOnEthereum: 17574339076.92, // in $
                },
                {
                    name: "OKB ",
                    symbol: "OKB",
                    lastPrice: 49.69, // in $
                    holders: 50750,
                    capitalizationOnEthereum: 14907000000.0, // in $
                },
                {
                    name: "Matic Token ",
                    symbol: "MATIC",
                    lastPrice: 1.3557, // in $
                    holders: 589771,
                    capitalizationOnEthereum: 13557342493.28, // in $
                },
                {
                    name: "HEX ",
                    symbol: "HEX",
                    lastPrice: 0.0594, // in $
                    holders: 320645,
                    capitalizationOnEthereum: 34323524926.68, // in $
                },
                {
                    name: "stETH ",
                    symbol: "stETH",
                    lastPrice: 1641.39, // in $
                    holders: 165500,
                    capitalizationOnEthereum: 3042495276.51, // in $
                },

                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "SHIBA INU ",
                    symbol: "SHIB",
                    lastPrice: 0.00001262, // in $
                    holders: 1311123,
                    capitalizationOnEthereum: 12909894573.01, // in $
                },
                {
                    name: "ANY Litecoin ",
                    symbol: "anyLTC",
                    lastPrice: 94.9455, // in $
                    holders: 15,
                    capitalizationOnEthereum: 6836.08, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Theta Token ",
                    symbol: "THETA",
                    lastPrice: 5.2667, // in $
                    holders: 28146,
                    capitalizationOnEthereum: 5266695404.45, // in $
                },
                {
                    name: "Uniswap ",
                    symbol: "UNI",
                    lastPrice: 6.9, // in $
                    holders: 370244,
                    capitalizationOnEthereum: 69000000000.0, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Dai Stablecoin ",
                    symbol: "DAI",
                    lastPrice: 1.0, // in $
                    holders: 499907,
                    capitalizationOnEthereum: 9799652329.0, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Wrapped BTC ",
                    symbol: "WBTC",
                    lastPrice: 24171.0, // in $
                    holders: 64469,
                    capitalizationOnEthereum: 6328306194.0, // in $
                },
                {
                    name: "ChainLink Token ",
                    symbol: "LINK",
                    lastPrice: 7.46, // in $
                    holders: 651770,
                    capitalizationOnEthereum: 7460000000.0, // in $
                },
                {
                    name: "Wrapped TON Coin ",
                    symbol: "TONCOIN",
                    lastPrice: 2.39, // in $
                    holders: 5721,
                    capitalizationOnEthereum: 17558629.73, // in $
                },
                {
                    name: "Bitfinex LEO Token ",
                    symbol: "LEO",
                    lastPrice: 3.33, // in $
                    holders: 2611,
                    capitalizationOnEthereum: 2197800000000.0, // in $
                },
                {
                    name: " Lido DAO Token",
                    symbol: "LDO",
                    lastPrice: 2.8, // in $
                    holders: 31605,
                    capitalizationOnEthereum: 2800000000.0, // in $
                },
                {
                    name: "NEAR ",
                    symbol: "NEAR",
                    lastPrice: 2.46, // in $
                    holders: 1019,
                    capitalizationOnEthereum: 966536.36, // in $
                },
                {
                    name: "VeChain ",
                    symbol: "VEN",
                    lastPrice: 0.0291, // in $
                    holders: 46185,
                    capitalizationOnEthereum: 29074903.36, // in $
                },
                {
                    name: "BNB ",
                    symbol: "BNB",
                    lastPrice: 307.8829, // in $
                    holders: 302156,
                    capitalizationOnEthereum: 510454913162, // in $
                },
                {
                    name: "Cronos Coin ",
                    symbol: "CRO",
                    lastPrice: 0.0835, // in $
                    holders: 292875,
                    capitalizationOnEthereum: 8349200000.0, // in $
                },
                {
                    name: "ApeCoin ",
                    symbol: "APE",
                    lastPrice: 5.52, // in $
                    holders: 113453,
                    capitalizationOnEthereum: 5520000000.0, // in $
                },
                {
                    name: "Quant ",
                    symbol: "QNT",
                    lastPrice: 133.29, // in $
                    holders: 117593,
                    capitalizationOnEthereum: 6060296430.0, // in $
                },
                {
                    name: "Graph Token ",
                    symbol: "GRT",
                    lastPrice: 0.1594, // in $
                    holders: 136173,
                    capitalizationOnEthereum: 1641280448.94, // in $
                    volume: 138238862.0, // in $
                },
                {
                    name: "chiliz ",
                    symbol: "CHZ",
                    lastPrice: 0.1359, // in $
                    holders: 175973,
                    capitalizationOnEthereum: 1208248888.77, // in $
                },
                {
                    name: "Wrapped Decentraland M ",
                    symbol: "wMANA",
                    lastPrice: 0.6787, // in $
                    holders: 0,
                    capitalizationOnEthereum: 21201765.23, // in $
                },
                {
                    name: "[FCT]FimaChain Token ",
                    symbol: "FCT",
                    lastPrice: 0.0725, // in $
                    holders: 12707,
                    capitalizationOnEthereum: 43490400.0, // in $
                },
                {
                    name: "1INCH Token ",
                    symbol: "1INCH",
                    lastPrice: 0.6388, // in $
                    holders: 103491,
                    capitalizationOnEthereum: 958141500.0, // in $
                },
                {
                    name: "Linear Token ",
                    symbol: "LINA",
                    lastPrice: 0.0133, // in $
                    holders: 13893,
                    capitalizationOnEthereum: 132738300.0, // in $
                    volume: 138238862.0, // in $
                },
                {
                    name: "Uniswap ",
                    symbol: "UNI",
                    lastPrice: 6.76, // in $
                    holders: 370261,
                    capitalizationOnEthereum: 6760000000.0, // in $
                },
                {
                    name: "GreenMetaverseToken",
                    symbol: "GMT",
                    lastPrice: 0.4228, // in $
                    holders: 10422,
                    capitalizationOnEthereum: 24559499.05, // in $
                },
                {
                    name: "VaChain ",
                    symbol: "VEN",
                    lastPrice: 0.0283, // in $
                    holders: 46185,
                    capitalizationOnEthereum: 28285133.68, // in $
                },
                {
                    name: "UMA Voting Token v1 ",
                    symbol: "UMA",
                    lastPrice: 2.29, // in $
                    holders: 20224,
                    capitalizationOnEthereum: 243186762.97, // in $
                },
                {
                    name: "WQtum ",
                    symbol: "WQTUM",
                    lastPrice: 3.603, // in $
                    holders: 41,
                    capitalizationOnEthereum: 388488608.1, // in $
                },
                // ------
                {
                    name: "NXM",
                    symbol: "NXM",
                    lastPrice: 45.21, // in $
                    holders: 4089,
                    capitalizationOnEthereum: 311542110.0, // in $
                },
                {
                    name: "Wootrade Network ",
                    symbol: "WOO",
                    lastPrice: 0.185, // in $
                    holders: 14010,
                    capitalizationOnEthereum: 555111000.0, // in $
                },
                {
                    name: "GALA ",
                    symbol: "GALA",
                    lastPrice: 0.0387, // in $
                    holders: 212730,
                    capitalizationOnEthereum: 1425515748.98, // in $
                },
                {
                    name: "Olympus ",
                    symbol: "OHM",
                    lastPrice: 10.26, // in $
                    holders: 6137,
                    capitalizationOnEthereum: 117404513.1, // in $
                },
                {
                    name: "Blur ",
                    symbol: "BLUR",
                    lastPrice: 0.6926, // in $
                    holders: 44084,
                    capitalizationOnEthereum: 2077734000.0, // in $
                },
                {
                    name: "Amp ",
                    symbol: "AMP",
                    lastPrice: 0.0049, // in $
                    holders: 94866,
                    capitalizationOnEthereum: 489127326.67, // in $
                },
                {
                    name: "Gnosis ",
                    symbol: "GNO",
                    lastPrice: 103.42, // in $
                    holders: 17317,
                    capitalizationOnEthereum: 1034200000.0, // in $
                },
                {
                    name: "SSV Token",
                    symbol: "SSV",
                    lastPrice: 37.16, // in $
                    holders: 2693,
                    capitalizationOnEthereum: 409058060.36, // in $
                },
                {
                    name: "Injective Token ",
                    symbol: "INJ",
                    lastPrice: 3.33, // in $
                    holders: 12082,
                    capitalizationOnEthereum: 333000000.0, // in $
                },
                {
                    name: "Balancer ",
                    symbol: "BAL",
                    lastPrice: 6.42, // in $
                    holders: 45521,
                    capitalizationOnEthereum: 306619200.0, // in $
                },
                {
                    name: "HarmonyOne",
                    symbol: "ONE",
                    lastPrice: 0.0193, // in $
                    holders: 195,
                    capitalizationOnEthereum: 240770766.1, // in $
                },
            ],
        },
    });
}
