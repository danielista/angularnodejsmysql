-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: St 26.Jan 2022, 10:25
-- Verzia serveru: 10.4.22-MariaDB
-- Verzia PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `simpledb`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `habit_tracker_table`
--

CREATE TABLE `habit_tracker_table` (
  `id` int(11) NOT NULL,
  `user` varchar(50) CHARACTER SET utf8 COLLATE utf8_slovak_ci NOT NULL,
  `habit_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_slovak_ci NOT NULL,
  `habit_description` text CHARACTER SET utf8 COLLATE utf8_slovak_ci NOT NULL,
  `start_time` date NOT NULL,
  `end_time` date NOT NULL,
  `done` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sťahujem dáta pre tabuľku `habit_tracker_table`
--

INSERT INTO `habit_tracker_table` (`id`, `user`, `habit_name`, `habit_description`, `start_time`, `end_time`, `done`) VALUES
(1, 'Danko', 'bežíme', 'ta každý deň chcem aspoň 5km behať', '2022-01-13', '2022-01-21', 0),
(5, 'KIKO', 'jeREPAIERek', 'bKIKO toruble shoterviu', '2022-01-21', '2022-03-22', 0),
(6, 'no takže ako?', 'PROGRAMKO', 'šesť hodin a potom jeden TYPEOFF chybička', '2022-01-21', '2022-03-22', -1),
(9, 'adam ', 'jedenie halusiek', 'bryndza pomaha zdraviu', '2022-01-21', '2022-03-22', 0);

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `habit_tracker_table`
--
ALTER TABLE `habit_tracker_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `habit_tracker_table`
--
ALTER TABLE `habit_tracker_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
