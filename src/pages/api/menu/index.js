const menu = [
    {
        category: "Pizza",
        image: "/images/thumb_806_0_0_contain_48a4b15e.jpg",
        items: [
        {
            id: 1,
            name: "Margherita Pizza",
            description: "Double D's very special pizza sauce, loaded with mozzarella cheese.",
            image: "/images/pizza1.jpg",
            oldPrice: "109.00",
            newPrice: "99.00",
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Vegetarian Pizza",
            description: "Double D's very special pizza dough, topped with green peppers, mushrooms, tomatoes, onions and mozzarella cheese,",
            image: "/images/pizza2.png",
            oldPrice: 109.00,
            newPrice: 99,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "Cheese Lovers Premium Pizza",
            description: "Double D's very special pizza dough, topped with four kinds of cheese; mozzarella, cheddar, red cheddar, and gouda cheese.",
            image: "/images/pizza3.png",
            oldPrice: 249.00,
            newPrice: 229.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Chicken BBQ Pizza",
            description: "Double D's very special pizza dough, topped with grilled chicken, mushroom, mozzarella and BBQ sauce.",
            image: "/images/pizza4.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            name: "Chicken Ranch Pizza",
            description: "Double D's very special pizza dough, topped with grilled chicken, mushroom, tomato, mozzarella and Ranch sauce.",
            image: "/images/pizza5.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            name: "Chicken Supreme Pizza",
            description: "Double D's very special pizza dough, topped with grilled chicken, mushrooms, green peppers, onions, olives and mozzarella cheese.",
            image: "/images/pizza6.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            name: "Chicken Mexicana",
            description: "Double D's very special pizza dough, topped with grilled chicken, onion, olives, green pepper, jalapeno, mozzarella cheese and Ranch sauce.",
            image: "/images/pizza7.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            name: "Crunchy Chicken Pizza",
            description: "Double D's very special pizza dough, topped with crunchy chicken, mushroom, tomato, mozzarella, jalapeños and your choice BBQ, Ranch or Dynamite sauce.",
            image: "/images/pizza8.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            name: "Pepperoni Pizza",
            description: "Double D's very special pizza sauce, topped with extra pepperoni, mushroom, olives and mozzarella cheese.",
            image: "/images/pizza9.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 10,
            name: "Super Supreme Pizza Big Tasty",
            description: "Double D's very special pizza dough, topped with pepperoni, salami, beef toppings, peppers, onions, olives, and mozzarella cheese With Big tasty Sauce",
            image: "/images/pizza10.png",
            oldPrice: 329.00,
            newPrice: 229.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 11,
            name: "Super Supreme Pizza",
            description: "Double D's very special pizza dough, topped with pepperoni, salami, beef toppings, peppers, onions, olives, and mozzarella cheese.",
            image: "/images/pizza11.png",
            oldPrice: 329.00,
            newPrice: 229.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 12,
            name: "Super Supreme Pizza",
            description: "Double D's very special pizza dough, topped with pepperoni, salami, beef toppings, peppers, onions, olives, and mozzarella cheese.",
            image: "/images/pizza12.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 13,
            name: "Tasty Beef Burger Pizza",
            description: "Double D's very special pizza sauce, topped with Beef toppings, tomatoes, onions , onion rings, mozzarella cheese and Tasty Sauce.",
            image: "/images/pizza13.png",
            oldPrice: 169.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        {
            id: 14,
            name: "Meat Lovers Pizza",
            description: "Double D's very special pizza sauce, topped with pepperoni, beef toppings, salami, mozzarella cheese.",
            image: "/images/pizza14.png",
            oldPrice: 196.00,
            newPrice: 119.00,
            options: [
                {
                    name: "Pizza Size:",
                    choices: [
                        {
                            choice:"Large",
                            price: "50.00"
                        },
                        {
                            choice:"X-Large",
                            price: "100.00"
                        },
                        {
                            choice:"personal",
                            price: "0.00"
                        }
                    ]
                },
                {
                    name: "Dough:",
                    choices: [
                        {
                            choice:"Deep Dish",
                            price: "0.00"
                        },
                        {
                            choice:"Stuffed Crust",
                            price: "60.00"
                        }, 
                        {
                            choice:"Classic",
                            price: "0.00"
                        }, 
                        {
                            choice:"Thin",
                            price: "0.00"
                        }
                    ]
                }
            ]
        },
        ]
    },
    {
        category: "Sandwiches",
        image: "/images/thumb_804_0_0_contain_48a4b15e.jpg",
        items: [
            {
                id: 1,
                name: "Chickana Classic",
                description: "Chickana's special chicken fillet, cheese, lettuce, tomatoes, pickles, mayo and Chickana sauce in a round bun.",
                image: "/images/sandwich1.png",
                oldPrice: 155.00,
                newPrice: 100.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Volcano",
                description: "Chickana's special chicken fillet, cheese, lettuce, tomatoes, pickles, mayo, volcano in a round bun.",
                image: "/images/sandwich2.png",
                oldPrice: 155.00,
                newPrice: 100.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Ranch Sandwich",
                description: "Chickana's special chicken fillet, smoked turkey, cheese, lettuce, tomatoes, pickles, mayo and ranch in a round bun.",
                image: "/images/sandwich3.png",
                oldPrice: 165.00,
                newPrice: 115.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: "Dynamite",
                description: "Chickana's special chicken fillet, smoked turkey, cheese, lettuce, tomatoes, pickles, mayo, volcano and dynamite in a round bun.",
                image: "/images/sandwich4.png",
                oldPrice: 165.00,
                newPrice: 115.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 5,
                name: "Big Boss",
                description: "Chickana's special chicken fillet, smoked beef, cheese, lettuce, tomatoes, pickles, mayo and BBQ sauce in a round bun.",
                image: "/images/sandwich5.png",
                oldPrice: 165.00,
                newPrice: 115.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                name: "Extra Cheesy",
                description: "Chicken breast fillet with Chickana’s recipe, with fried mozzarella sticks, cheese, lettuce, tomatoes, mayo, and cheese sauce in a round bun.",
                image: "/images/sandwich6.png",
                oldPrice: 165.00,
                newPrice: 115.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                name: "Big Chicka",
                description: "Cheddar cheese sauce, mozzarella sticks, smoked beef, crispy chicken fillet, dynamite sauce, fried onion rings, tomatoes, lettuce, mayonnaise",
                image: "/images/sandwich7.png",
                oldPrice: 195.00,
                newPrice: 125.00,
                options: [
                    {
                        name: "Sandwich Size",
                        choices: [
                            {
                                choice:"Single",
                                price: "0.00"
                            },
                            {
                                choice:"Double",
                                price: "40.00"
                            }
                        ]
                    },
                    {
                        name: "Combo",
                        choices: [
                            {
                                choice:"Only Sandwich",
                                price: "0.00"
                            },
                            {
                                choice:"Combo Fries + Drink",
                                price: "39.00"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        category: "Fried Chicken",
        image: "/images/thumb_816_0_0_contain_48a4b15e.jpg",
        items: [
            {
                id: 1,
                name: "Individual Meals Chicken",
                description: "Choose 2/3/4 pieces meal fried chicken without wings Comes with Cole law, Fries, Bun, Sauce and a drink.",
                image: "/images/fried1.png",
                oldPrice: 199.00,
                newPrice: 145.00,
                options: [
                    {
                        name: "Pieces",
                        choices: [
                            {
                                choice:"2 Pieces",
                                price: "0.00"
                            },
                            {
                                choice:"3 Pieces",
                                price: "50.00"
                            },
                            {
                                choice:"4 Pieces",
                                price: "90.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Original",
                                price: "0.00"
                            },
                            {
                                choice:"Spicy",
                                price: "0.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Crispy Strips Meals",
                description: "Fried Chicken Strips, Fries, Cole Slaw, Sauce Drink and a Bun.",
                image: "/images/fried2.png",
                oldPrice: 179.00,
                newPrice: 125.00,
                options: [
                    {
                        name: "Pieces",
                        choices: [
                            {
                                choice:"3 Pieces",
                                price: "0.00"
                            },
                            {
                                choice:"10 Pieces",
                                price: "170.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Original",
                                price: "0.00"
                            },
                            {
                                choice:"Spicy",
                                price: "0.00"
                            }
                        ]
                    },
                    {
                        name: "Sauces - side",
                        choices: [
                            {
                                choice: "Sweet and Sour",
                                price: "0.00"
                            },
                            {
                                choice:"Ranch",
                                price: "5.00"
                            },
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: "Family Chicken Meals",
                description: "All meals are wiyhout wings and come with fries, family coleslaw and Family Drink and 1 bun per 3 pcs and 1 sauce per",
                image: "/images/fried3.png",
                oldPrice: 575.00,
                newPrice: 495.00,
                options: [
                    {
                        name: "Pieces",
                        choices: [
                            {
                                choice:"9 Pieces",
                                price: "0.00"
                            },
                            {
                                choice:"12 Pieces",
                                price: "130.00"
                            },
                            {
                                choice:"15 Pieces",
                                price: "255.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Original",
                                price: "0.00"
                            },
                            {
                                choice:"Spicy",
                                price: "0.00"
                            }
                        ]
                    },
                    {
                        name: "Sauces - side",
                        choices: [
                            {
                                choice: "Sweet and Sour",
                                price: "0.00"
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        category: "Sides & Drinks",
        image: "/images/thumb_812_0_0_contain_48a4b15e.jpg",
        items: [
            {
                id: 1,
                name: "Rice",
                description: "Chickana's special rice",
                image: "/images/side1.png",
                newPrice: 45.00,
            },
            {
                id: 2,
                name: "Rizo",
                description: "Chickana's special Rizo rice, chicken pieces and your choice of sauce.",
                image: "/images/side2.png",
                oldPrice: 99.00,
                newPrice: 75.00,
                options: [
                    {
                        name: "Rizo Sauce",
                        choices: [
                            {
                                choice:"BBQ",
                                price: "0.00"
                            },
                            {
                                choice:"Volcano (Spicy)",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Sweet and Sour",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Dynamite",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Ranch",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Big Tasty",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Cheese Sauce",
                                price: "0.00"
                            },
                            {
                                choice:"Honey Mustard",
                                price: "0.00"
                            },
                            {
                                choice:"Spicy BBQ",
                                price: "0.00"
                            },
                            {
                                choice:"Chickana",
                                price: "0.00"
                            }
                        ]
                    },
                ]
            },
            {
                id: 3,
                name: "Onion Rings",
                description: "Onion Rings served with a sauce of your choice.",
                image: "/images/side3.png",
                oldPrice: 69.00,
                newPrice: 50.00,
                options: [
                    {
                        name: "Sauces-side",
                        choices: [
                            {
                                choice:"BBQ",
                                price: "0.00"
                            },
                            {
                                choice:"Volcano (Spicy)",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Sweet and Sour",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Dynamite",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Ranch",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Big Tasty",
                                price: "0.00"
                            }
                            ,
                            {
                                choice:"Cheese Sauce",
                                price: "0.00"
                            },
                            {
                                choice:"Honey Mustard",
                                price: "0.00"
                            },
                            {
                                choice:"Spicy BBQ",
                                price: "0.00"
                            },
                            {
                                choice:"Chickana",
                                price: "0.00"
                            }
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: "Cheese Sticks",
                description: "Your choice of Mozzarella sticks with sauce.",
                image: "/images/side4.png",
                oldPrice: 75.00,
                newPrice: 50.00,
                options: [
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Mozzarella Cheese",
                                price: "0.00"
                            },
                        ]
                    },
                    {
                        name: "Pieces",
                        choices: [
                            {
                                choice:"3 pieces",
                                price: "0.00"
                            },
                        ]
                    },
                ]
            },
            {
                id: 5,
                name: "French Fries",
                description: "Chickana's Golden Fries.",
                image: "/images/side5.png",
                oldPrice: 60.00,
                newPrice: 35.00,
                options: [
                    {
                        name: "Fries Size",
                        choices: [
                            {
                                choice:"Large",
                                price: "0.00"
                            },
                            {
                                choice:"Family",
                                price: "0.00"
                            },
                        ]
                    }
                ]
            },
            {
                id: 6,
                name: "Chicken Cheese Fries",
                description: "Chickana's Loaded Fries.",
                image: "/images/side6.png",
                oldPrice: 129.00,
                newPrice: 75.00,
                options: [
                    {
                        name: "Fries Flavor",
                        choices: [
                            {
                                choice:"Chicken Cheese Fries",
                                price: "0.00"
                            },
                        ]
                    },
                    {
                        name: "Pieces",
                        choices: [
                            {
                                choice:"3 pieces",
                                price: "0.00"
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        category: "Dessert",
        image: "/images/thumb_811_0_0_contain_48a4b15e.jpg",
        items: [
            {
                id: 1,
                name: "Sweet crepe",
                description: "",
                image: "/images/dessert1.avif",
                oldPrice: 120.00,
                newPrice: 100.00,
                options: [
                    {
                        name: "Pieces",
                        choices: [
                            {
                                choice:"2 Pieces",
                                price: "0.00"
                            },
                            {
                                choice:"3 Pieces",
                                price: "45.00"
                            },
                            {
                                choice:"4 Pieces",
                                price: "90.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Nutella",
                                price: "0.00"
                            },
                            {
                                choice:"Nutella & Banana",
                                price: "0.00"
                            },
                            {
                                choice:"Lotus Biscoff",
                                price: "0.00"
                            },
                            {
                                choice:"Strawberry / Berry Jam",
                                price: "0.00"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: "Cake Slice",
                description: "",
                image: "/images/dessert2.jpg",
                oldPrice: 90.00,
                newPrice: 80.00,
                options: [
                    {
                        name: "Add-ons",
                        choices: [
                            {
                                choice:"Chocolate Sauce",
                                price: "0.00"
                            },
                            {
                                choice:"Nuts",
                                price: "0.00"
                            },
                            {
                                choice:"Fresh Fruits",
                                price: "0.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Chocolate",
                                price: "0.00"
                            },
                            {
                                choice:"Vanilla",
                                price: "0.00"
                            },
                            {
                                choice:"Red Velvet",
                                price: "0.00"
                            },
                            {
                                choice:"Oreo",
                                price: "0.00"
                            }
                        ]
                    }
                ]
            },{
                id: 3,
                name: "Cake Slice",
                description: "",
                image: "/images/dessert3.webp",
                oldPrice: 90.00,
                newPrice: 80.00,
                options: [
                    {
                        name: "Add-ons",
                        choices: [
                            {
                                choice:"Chocolate Sauce",
                                price: "0.00"
                            },
                            {
                                choice:"Nuts",
                                price: "0.00"
                            },
                            {
                                choice:"Fresh Fruits",
                                price: "0.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Chocolate",
                                price: "0.00"
                            },
                            {
                                choice:"Vanilla",
                                price: "0.00"
                            },
                            {
                                choice:"Red Velvet",
                                price: "0.00"
                            },
                            {
                                choice:"Oreo",
                                price: "0.00"
                            }
                        ]
                    }
                ]
            },{
                id: 4,
                name: "Small Tart",
                description: "",
                image: "/images/dessert4.webp",
                oldPrice: 110.00,
                newPrice: 90.00,
                options: [
                    {
                        name: "Sizes",
                        choices: [
                            {
                                choice:"For 2 people",
                                price: "0.00"
                            },
                            {
                                choice:"For 4 people",
                                price: "40.00"
                            },
                            {
                                choice:"For 6 people",
                                price: "60.00"
                            }
                        ]
                    },
                    {
                        name: "Flavor",
                        choices: [
                            {
                                choice:"Chocolate Cake",
                                price: "0.00"
                            },
                            {
                                choice:"Fruit Cake",
                                price: "0.00"
                            },
                            {
                                choice:"Red Velvet Cake",
                                price: "0.00"
                            },
                            {
                                choice:"Lotus Cake",
                                price: "0.00"
                            }
                        ]
                    }
                ]
            },
        ]
    },
];

export default function handler(req, res) {
    res.status(200).json(menu);
}
