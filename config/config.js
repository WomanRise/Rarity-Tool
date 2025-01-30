const config = {
    app_name: 'WomenRise Rarity',
    app_description: 'WomenRise rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x7f7685b4CC34BD19E2B712D8a89f34D219E76c35',
    collection_name: 'Women rise',
    collection_description: 'Women Rise Collection',
    collection_id_from: 0,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://i.seadn.io/gae/2MsWeFGP4TzS3LiwOTQ4NnmGWvA-cWCcTng-R_ZCve_fYvqJ8slusr-f7y8Q0adO2QrpPWMjD6TadLRrbHfrbrzVGWPSWBLVs-zPGA?auto=format&dpr=1&w=256',
    item_path_name: 'WomenRise',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;