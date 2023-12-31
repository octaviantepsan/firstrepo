const redirectUrls = {
    index: "file:///D:/OCTAVIAN/github/firstrepo/main/index.html",
    listing_page: "file:///D:/OCTAVIAN/github/firstrepo/main/listing-page.html",
    error_page: "file:///D:/OCTAVIAN/github/firstrepo/main/error-page.html"
};

const anunturi = [
    {
        objectId: 1,
        anunt_titlu: "BMW Seria 7 730d xDrive",
        anunt_descriere: "TVA included non-deductible, invoice is issued. Standard warranty 6 months up to 10000 km with possibility to extend up to 24 months! Only owner in Romania, import Germany in 2020 at 169000 km. Full BMW history, available, no investment required, the car is in impeccable condition. No traces of wear inside, impeccable condition. One more set of R18 wheels for the winter season. You can check on the series in the ad the full list of equipment. FREE delivery anywhere in Romania!",
        anunt_imagini: ["../main/images/BMW1.jpg", "../main/images/BMW2.jpg", "../main/images/BMW3.jpg"],
        promo_image: "../main/images/BMW2.jpg",
        marca_masina: "BMW",
        year: 2016,
        price: "$29.990",
        km: 215100,
        engine_displacement: 2993,
        power: 265,
        phone_number: "0755667899",
        location: "Otopeni, Romania",
        fakeDistanceFromUser: "236km from your location",
        lastUpdatedDate: "1 November 2023",
        negotiable: "false"
    },
    {
        objectId: 2,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: ["../main/images/Dacia1.jpg", "../main/images/Dacia2.jpg", "../main/images/Dacia3.jpg"],
        promo_image: "../main/images/Dacia1.jpg",
        marca_masina: "Dacia",
        year: 2020,
        price: 13328,
        km: 69000,
        engine_displacement: 999,
        power: 100,
        phone_number: "0783997216",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 3,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: ["../main/images/Mitsubishi1.jpg", "../main/images/Mitsubishi2.jpg", "../main/images/Mitsubishi3.jpg"],
        promo_image: "../main/images/Mitsubishi1.jpg",
        marca_masina: "Mitsubishi",
        year: 2009,
        price: 19999,
        km: 125726,
        engine_displacement: 1998,
        power: 450,
        phone_number: "0781963753",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 4,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: [],
        promo_image: "../main/images/BMW4.jpg",
        marca_masina: "BMW",
        year: "",
        price: "",
        km: "",
        engine_displacement: "",
        power: "",
        phone_number: "",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 5,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: [],
        promo_image: "../main/images/Renault.jpg",
        marca_masina: "Renault",
        year: "",
        price: "",
        km: "",
        engine_displacement: "",
        power: "",
        phone_number: "",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 6,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: [],
        promo_image: "../main/images/Lamborghini.jpg",
        marca_masina: "Lamborghini",
        year: "",
        price: "",
        km: "",
        engine_displacement: "",
        power: "",
        phone_number: "",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 7,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: [],
        promo_image: "../main/images/Ford.jpg",
        marca_masina: "Ford",
        year: "",
        price: "",
        km: "",
        engine_displacement: "",
        power: "",
        phone_number: "",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 8,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: [],
        promo_image: "../main/images/Honda.jpg",
        marca_masina: "Honda",
        year: "",
        price: "",
        km: "",
        engine_displacement: "",
        power: "",
        phone_number: "",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
    {
        objectId: 9,
        anunt_titlu: "Lorem Ipsum is simply dummy text Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        anunt_descriere: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        anunt_imagini: [],
        promo_image: "../main/images/Porsche.jpg",
        marca_masina: "Porsche",
        year: "",
        price: "",
        km: "",
        engine_displacement: "",
        power: "",
        phone_number: "",
        location: "",
        fakeDistanceFromUser: "",
        lastUpdatedDate: "",
        negotiable: ""
    },
];

const marci = [
    {
        marca_masina: "Dacia",
    },
    {
        marca_masina: "BMW",
    },
    {
        marca_masina: "Mitsubishi",
    },
    {
        marca_masina: "Renault",
    },
    {
        marca_masina: "Lamborghini",
    },
    {
        marca_masina: "Ford",
    },
    {
        marca_masina: "Honda",
    },
    {
        marca_masina: "Nissan",
    },
    {
        marca_masina: "Porsche"
    }
];
