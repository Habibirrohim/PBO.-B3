-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 12, 2024 at 03:08 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pertemuan7_pbo`
--

-- --------------------------------------------------------

--
-- Table structure for table `conservation_areas`
--

CREATE TABLE `conservation_areas` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `area_size` decimal(10,2) NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logistik`
--

CREATE TABLE `logistik` (
  `id_logistik` int NOT NULL,
  `nama_barang` varchar(100) NOT NULL,
  `kategori_barang` varchar(100) DEFAULT NULL,
  `berat` decimal(10,2) DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  `nama_gudang` varchar(100) DEFAULT NULL,
  `lokasi_gudang` varchar(255) DEFAULT NULL,
  `kapasitas_gudang` int DEFAULT NULL,
  `tanggal_pengiriman` date DEFAULT NULL,
  `tujuan_pengiriman` varchar(255) DEFAULT NULL,
  `jumlah_barang` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mangrove_locations`
--

CREATE TABLE `mangrove_locations` (
  `id` int NOT NULL,
  `location_name` varchar(100) NOT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `species`
--

CREATE TABLE `species` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('rentan','terancam','punah') NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `species`
--

INSERT INTO `species` (`id`, `name`, `status`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Habibirrohim', 'terancam', 'dgsfasd', '2024-11-03 04:11:47', '2024-11-03 04:11:47');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL COMMENT 'Primary Key',
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(1, 'habibi_rrohim', 'hhabibirohim@gmail.com', '$2a$10$I/gidF7OBpWYTJBnOMADaOLbmb3XIguCLhgXUHr5fKHMNGkekyA52'),
(2, 'habibi_rrohim', 'habibirrohim14@upi.edu', '$2a$10$9adCITIfUKQLJBHRwKvKJuJRRwz.n5Ke20NkSqZ7DzyJWHLKCbAhe'),
(3, 'habibi_rrohim', 'habibirrohim14@upi.edu', '$2a$10$H98HMlb3P0qUt815KDdqZufxaGtMqqyrjYN50a0Tk93c4g7WbBu1m'),
(4, 'habibi_rrohim', 'hhabibirohim@gmail.com', '$2a$10$.BovXXShMoskcPw1sZQyA.2HMexQb6QLuoq03guxJtLc0vTeOQIdW'),
(5, 'faiq', 'hhabibirohim@gmail.com', '$2a$10$JN/GHQaFy5x3NJyo5TWRsOcmjP2NNp4H1UKAOx45SukZq1Fp.7fe6'),
(6, 'habibi', 'hhabibi@gmail.com', '$2a$10$t5ZFRRncOwMZFp.2hgEVy.ZH/er6/4GesBZ1Ejm75NuzbSiHPA1dG'),
(7, 'habibi', 'hhabibi@gmail.com', '$2a$10$fIZEUVz5AQo4hxlIJq9yyeiBWYXb1FEVSQ84hpRE2oj/w/XOF/tb6'),
(8, 'faiq', 'hhabibi@gmail.com', '$2a$10$9kTEQkUPA4MCTboS0W4IkOPouFcFrkNCNomVHGr4k.idUinZ/CyTm'),
(9, 'habibi', 'hhabibi@gmail.com', '$2a$10$SDKZFqCZBxFAPQsztAiTVuZ8FVfzICwmNQ/iNhM1BQZbGhjZYobk2'),
(10, 'Habibirrohim', 'hhabibi@gmai.com', '$2a$10$q4Hlj/VReE/k3inQxpRZ6.rZw3n1NWuhm9OPc2iKUFcEsFFht3ESe'),
(11, 'Habibirrohim', 'hhabibirrohim@gamail.com', '$2a$10$zK6XzkLVkOlNipQfbok8aeSfbUxJ72VBUIk/lYGrkV1VcvVGJySue'),
(12, 'habibi', 'hhabibirohim@gmail.com', '$2a$10$rWdS9DBECdNvJct89fWlGuNYHbWyS8atUsM6gz/tUwugC5fxurxai'),
(13, 'bi', 'bi@gmai.com', '$2a$10$0hvnbI7m5JrYBsoQOouX4eoDJjfDAYGIcr9HkODPuk5omSgc0yRyK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conservation_areas`
--
ALTER TABLE `conservation_areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logistik`
--
ALTER TABLE `logistik`
  ADD PRIMARY KEY (`id_logistik`);

--
-- Indexes for table `mangrove_locations`
--
ALTER TABLE `mangrove_locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `species`
--
ALTER TABLE `species`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conservation_areas`
--
ALTER TABLE `conservation_areas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `logistik`
--
ALTER TABLE `logistik`
  MODIFY `id_logistik` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `mangrove_locations`
--
ALTER TABLE `mangrove_locations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `species`
--
ALTER TABLE `species`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key', AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
