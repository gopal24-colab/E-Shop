import { Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  ProductsPage,
  FaqPage,
  BestSellingPage,
  EventsPage,
} from "./pages";
import ProfilePage from "./components/profile/ProfilePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./redux/reducers/User";
import { CheckoutPage, PaymentPage, ProductDetailsPage } from "./components";
import LogedInProtectedRoute from "./components/ProtectedRoutes/LogedInProtectedRoute";
import {
  ShopAllEventsPage,
  ShopAllOrdersPage,
  ShopDiscountPage,
  ShopInboxPage,
  ShopLoginPage,
  ShopRefundsPage,
  ShopRegisterPage,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
} from "./components/Shop/pages";
import PageNotFound from "./pages/PageNotFound";
import { fetchSeller } from "./redux/reducers/Seller";
import ShopDashboardPage from "./components/Shop/pages/ShopDashboardPage";
import SellerProtectedRoute from "./components/ProtectedRoutes/SellerLoginProtectedRoute";
import ShopProfilePage from "./components/Shop/Profile/ShopProfilePage";
import ShopCreateProductPage from "./components/Shop/pages/ShopCreateProductPage";
import ShopAllProductsPage from "./components/Shop/pages/ShopAllProductsPage";
import ShopCreateEventPage from "./components/Shop/pages/ShopCreateEventPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchSeller());
  }, [dispatch]);
  return (
    <div className="bg-slate-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:details" element={<ProductDetailsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route
          path="/profile"
          element={
            <LogedInProtectedRoute>
              <ProfilePage />
            </LogedInProtectedRoute>
          }
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        {/* Shop routes */}
        <Route path="/shop">
          <Route
            path="dashboard"
            element={
              <SellerProtectedRoute>
                <ShopDashboardPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="orders"
            element={
              <SellerProtectedRoute>
                <ShopAllOrdersPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="create-product"
            element={
              <SellerProtectedRoute>
                <ShopCreateProductPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="all-products"
            element={
              <SellerProtectedRoute>
                <ShopAllProductsPage />
              </SellerProtectedRoute>
            }
          />
          <Route path=":id" element={<ShopProfilePage />} />
          <Route
            path="create-event"
            element={
              <SellerProtectedRoute>
                <ShopCreateEventPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="withdraw-money"
            element={
              <SellerProtectedRoute>
                <ShopWithDrawMoneyPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="events"
            element={
              <SellerProtectedRoute>
                <ShopAllEventsPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="coupons"
            element={
              <SellerProtectedRoute>
                <ShopDiscountPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="inbox"
            element={
              <SellerProtectedRoute>
                <ShopInboxPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="refunds"
            element={
              <SellerProtectedRoute>
                <ShopRefundsPage />
              </SellerProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <SellerProtectedRoute>
                <ShopSettingsPage />
              </SellerProtectedRoute>
            }
          />
          <Route path="login" element={<ShopLoginPage />} />
          <Route path="register" element={<ShopRegisterPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
