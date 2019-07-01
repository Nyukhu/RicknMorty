-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 01 juil. 2019 à 12:13
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `rickandmorty`
--

-- --------------------------------------------------------

--
-- Structure de la table `favorite_location`
--

DROP TABLE IF EXISTS `favorite_location`;
CREATE TABLE IF NOT EXISTS `favorite_location` (
  `idfavorite_location` int(11) NOT NULL AUTO_INCREMENT,
  `location_idlocation` int(11) NOT NULL,
  `user_iduser` int(11) NOT NULL,
  PRIMARY KEY (`idfavorite_location`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `favorite_location`
--

INSERT INTO `favorite_location` (`idfavorite_location`, `location_idlocation`, `user_iduser`) VALUES
(6, 1, 1),
(7, 3, 1),
(8, 5, 1),
(9, 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `favorite_resident`
--

DROP TABLE IF EXISTS `favorite_resident`;
CREATE TABLE IF NOT EXISTS `favorite_resident` (
  `idfavorite_resident` int(11) NOT NULL AUTO_INCREMENT,
  `user_iduser` int(11) NOT NULL,
  `resident_idresident` int(11) NOT NULL,
  PRIMARY KEY (`idfavorite_resident`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `favorite_resident`
--

INSERT INTO `favorite_resident` (`idfavorite_resident`, `user_iduser`, `resident_idresident`) VALUES
(67, 1, 71),
(75, 1, 17),
(76, 1, 108),
(77, 1, 100);

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `idlocation` int(11) NOT NULL AUTO_INCREMENT,
  `location_name` varchar(50) NOT NULL,
  `location_type` varchar(50) NOT NULL,
  `location_dimension` varchar(50) NOT NULL,
  PRIMARY KEY (`idlocation`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `location`
--

INSERT INTO `location` (`idlocation`, `location_name`, `location_type`, `location_dimension`) VALUES
(1, 'Earth (C-137)', 'Planet', 'Dimension C-137');

-- --------------------------------------------------------

--
-- Structure de la table `resident`
--

DROP TABLE IF EXISTS `resident`;
CREATE TABLE IF NOT EXISTS `resident` (
  `idresident` int(11) NOT NULL AUTO_INCREMENT,
  `resident_name` varchar(250) NOT NULL,
  `resident_species` varchar(500) NOT NULL,
  `resident_status` varchar(10) NOT NULL,
  `resident_gender` varchar(10) NOT NULL,
  `location_idlocation` int(11) NOT NULL,
  PRIMARY KEY (`idresident`),
  KEY `fk_resident_location` (`location_idlocation`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `resident`
--

INSERT INTO `resident` (`idresident`, `resident_name`, `resident_species`, `resident_status`, `resident_gender`, `location_idlocation`) VALUES
(1, 'Rick Sanchez', 'Human', 'Alive', 'Male', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `user_mail` varchar(50) NOT NULL,
  `user_mdp` varchar(250) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`iduser`, `user_mail`, `user_mdp`) VALUES
(1, 'test@gmail.com', 'test');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
