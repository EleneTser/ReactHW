import React, { useState } from 'react'
import './App.css'
import image1 from './assets/Image1.png'
import image2 from './assets/Image2.png'
import image3 from './assets/Image3.png'
import image4 from './assets/Image4.png'
import profile from './assets/Profile_Picture.png'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function App() {
  const product = {
    id: 1,
    company: "SNEAKER COMPANY",
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125.00,
    discount: "50%",
    originalPrice: 250.00,
    images: [image1, image2, image3, image4]
  }

  const [activeImage, setActiveImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(0)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNextImage = () => {
    const currentIndex = product.images.indexOf(activeImage)
    const nextIndex = (currentIndex + 1) % product.images.length
    setActiveImage(product.images[nextIndex])
  }

  const handlePrevImage = () => {
    const currentIndex = product.images.indexOf(activeImage)
    const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length
    setActiveImage(product.images[prevIndex])
  }

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    if (type === 'increment') setQuantity(prev => prev + 1)
    if (type === 'decrement' && quantity > 0) setQuantity(prev => prev - 1)
  }

  const handleAddToCart = () => {
    if (quantity === 0) return

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.images[0]
        }
      ]
    })

    setQuantity(0)
  }

  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navLeft">
          <button className="hamburgerBtn" onClick={() => setIsMobileMenuOpen(true)}>
            ☰
          </button>

          <span className="logo">sneakers</span>

          <div className={`navLinks ${isMobileMenuOpen ? 'mobileOpen' : ''}`}>
            <button className="mobileMenuClose" onClick={() => setIsMobileMenuOpen(false)}>
              ✕
            </button>

            <a href="#collections" className="link" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
            <a href="#men" className="link" onClick={() => setIsMobileMenuOpen(false)}>Men</a>
            <a href="#women" className="link" onClick={() => setIsMobileMenuOpen(false)}>Women</a>
            <a href="#about" className="link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>

        <div className="navRight">
          <div className="cartIconContainer" onClick={() => setIsCartOpen(!isCartOpen)}>
            <span className="material-symbols-outlined">shopping_cart</span>

            {totalCartItems > 0 && (
              <span className="cartBadge">{totalCartItems}</span>
            )}
          </div>

          <img
            className="avatar"
            src={profile}
            alt="Profile Avatar"
          />
        </div>

        {isCartOpen && (
          <div className="cartDropdown">
            <div className="cartHeader">
              Cart

              <button className="cartClose" onClick={() => setIsCartOpen(false)}>
                ✕
              </button>
            </div>

            <hr className="divider" />

            <div className="cartBody">
              {cart.length === 0 ? (
                <p className="emptyCartText">Your cart is empty.</p>
              ) : (
                <>
                  {cart.map(item => (
                    <div className="cartItem" key={item.id}>
                      <img
                        className="cartItemImg"
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cartItemDetails">
                        <p className="cartItemName">{item.name}</p>

                        <p className="cartItemPriceLine">
                          ${item.price.toFixed(2)} x {item.quantity}{' '}
                          <strong className="cartItemTotal">
                            ${(item.price * item.quantity).toFixed(2)}
                          </strong>
                        </p>
                      </div>

                      <button
                        className="deleteBtn"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  ))}

                  <button className="checkoutBtn">
                    Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <hr className="mainDivider" />

      <main className="mainContent">
        <div className="gallerySection">
          <img
            className="mainImage"
            src={activeImage}
            alt="Product display"
            onClick={() => setIsLightboxOpen(true)}
            style={{ cursor: 'pointer' }}
          />

          <div className="thumbnailContainer">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Thumbnail preview"
                className={`thumbnail ${activeImage === img ? 'activeThumbnail' : ''}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {isLightboxOpen && (
          <div className="lightboxOverlay" onClick={() => setIsLightboxOpen(false)}>
            <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
              <div className="lightboxImageWrapper">
                <button className="lightboxClose" onClick={() => setIsLightboxOpen(false)}>
                  ✕
                </button>

                <button
                  className="lightboxArrow lightboxArrowLeft"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevImage()
                  }}
                >
                  ‹
                </button>

                <img
                  className="lightboxImage"
                  src={activeImage}
                  alt="Product enlarged"
                />

                <button
                  className="lightboxArrow lightboxArrowRight"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNextImage()
                  }}
                >
                  ›
                </button>
              </div>

              <div className="lightboxThumbnailContainer">
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Thumbnail preview"
                    className={`lightboxThumbnail ${activeImage === img ? 'activeThumbnail' : ''}`}
                    onClick={() => setActiveImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="infoSection">
          <h4 className="companyName">{product.company}</h4>

          <h1 className="productTitle">{product.name}</h1>

          <p className="description">
            {product.description}
          </p>

          <div className="priceContainer">
            <div className="currentPriceRow">
              <span className="price">
                ${product.price.toFixed(2)}
              </span>

              <span className="discountTag">
                {product.discount}
              </span>
            </div>

            <span className="originalPrice">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <div className="actionRow">
            <div className="quantitySelector">
              <button
                className="quantityBtn"
                onClick={() => handleQuantityChange('decrement')}
              >
                -
              </button>

              <span className="quantityValue">
                {quantity}
              </span>

              <button
                className="quantityBtn"
                onClick={() => handleQuantityChange('increment')}
              >
                +
              </button>
            </div>

            <button className="addToCartBtn" onClick={handleAddToCart}>
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}