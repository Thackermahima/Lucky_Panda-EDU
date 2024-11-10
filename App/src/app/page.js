"use client"; // This is a client component 👈🏽
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Web3ContextProvider } from "./components/context/Web3Context";
import { LuckyPandaContextProvider } from "./components/context/LuckyPandaContext";
import Header from './components/Pages/Header';
import Footer from "./components/Pages/Footer";
import LandingPage from './components/Pages/LandingPage';
import CreateLottery from './components/Pages/CreateLottery';
import NFTReadership from './components/Pages/NFTReadership';
import AllCollections from './components/Pages/AllCollections';
import MyCollection from './components/Pages/MyCollection';
import MyCollectionDetail from './components/Pages/MyCollectionDetail';
import LuckyDraw from './components/Pages/LuckyDraw';
import './globals.css';

export default function Home() {

  return (
    <div>
      <BrowserRouter>
        <Web3ContextProvider>
          <LuckyPandaContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/create-lottery" element={<CreateLottery />} />
              <Route path="/NFT-collections" element={<NFTReadership />} />
              <Route path="/all-collections/:address" element={<AllCollections />} />
              <Route path="/my-collections" element={<MyCollection />} />
              <Route path="/all-mycollections/:address" element={<MyCollectionDetail />} />
              <Route path='/lucky-draw-collections' element={<LuckyDraw />} />
            </Routes>
            <Footer />
          </LuckyPandaContextProvider>
        </Web3ContextProvider>
      </BrowserRouter>
    </div>
  )
}