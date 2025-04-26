import Card from "../card/Card";

function Info({ isActive }) {
  const basicDetails = {
    pizzas: {
      title: "Pizzas",
      description:
        "Explore our great range of pizza recipes from the Pizza Hut pizza menu.",
      products: [
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/kadhai-paneer.86f5d60ae5c4f1e7f41b89be36aa275d.1.jpg?width=251",
          title: "Kadhai Paneer Pizza",
          description:
            "Take your taste buds on a joyride with juicy marinated paneer, capsicum, and onion, all coated in flavorful Kadhai sauce.",
        },
      ],
    },
    sides: {
      title: "Sides",
      description:
        "Explore our great choice of delicious sides to complement your pizzas",
      products: [
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/kadhai-garlic-bread-single.e612e4daf9145dd7e6520d70a952bb2a.1.jpg?width=251",
          title: "Kadhai Garlic Bread",
          description: `Hut's Signature Garlic Bread topped with onion, green chillies and rich Kadhai Sauce.`,
        },
      ],
    },
    desserts: {
      title: "Desserts",
      description:
        "Explore our tempting choice of delicious desserts. Available for delivery and collection.",
      products: [
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/brow-wow-nie-single.93a614f61b39d976b4ef5d1265676500.1.jpg?width=251",
          title: "Brow-wow-nie",
          description:
            "A divine choco brownie for your all time chocolate cravings",
        },
      ],
    },
    drinks: {
      title: "Drinks",
      description: "Explore our great selection of refreshing drinks",
      products: [
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi-600ml.f762b89387ea5612f4d109778efc280e.1.jpg?width=251",
          title: "Pepsi - 475ml",
          description: "Pepsi PET - 475ml. Contains Caffeine",
        },
      ],
    },
    deals: {
      title: "Deals",
      description: "Check out the latest meal deals available from Pizza Hut",
      products: [
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/buy-1-get-3-free1.fd80f3d1573dc919384bc273a4825f82.1.jpg?width=251",
          title: "Buy 1, Get 3 Free",
          description:
            "Order a Medium/Thin n Crispy pizza & get Classic Breadstix, Cheezy Sprinkled Fries, & Pepsi, absolutely FREE! Choose any pizza from classic to supreme range & get ready for a feast on us!",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/buy-1-get-3-free1.fd80f3d1573dc919384bc273a4825f82.1.jpg?width=251",
          title: "Buy 1, Get 3 Free",
          description:
            "Order a Medium/Thin n Crispy pizza & get Classic Breadstix, Cheezy Sprinkled Fries, & Pepsi, absolutely FREE! Choose any pizza from classic to supreme range & get ready for a feast on us!",
        },
        {
          image:
            "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/buy-1-get-3-free1.fd80f3d1573dc919384bc273a4825f82.1.jpg?width=251",
          title: "Buy 1, Get 3 Free",
          description:
            "Order a Medium/Thin n Crispy pizza & get Classic Breadstix, Cheezy Sprinkled Fries, & Pepsi, absolutely FREE! Choose any pizza from classic to supreme range & get ready for a feast on us!",
        },
      ],
    },
  };
  return (
    <>
      <div>
        <h1 className="text-4xl text-center my-5">
          Our {basicDetails[isActive].title}
        </h1>
        <p className="text-center text:md">
          {basicDetails[isActive].description}
        </p>
      </div>
      <div className="my-5 flex flex-wrap gap-5 justify-center items-center">
        {basicDetails[isActive].products.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
}

export default Info;
