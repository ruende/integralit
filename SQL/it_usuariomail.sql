/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : iit_sitioiit_liferay626

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-07-18 09:40:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `it_usuariomail`
-- ----------------------------
DROP TABLE IF EXISTS `it_usuariomail`;
CREATE TABLE `it_usuariomail` (
  `usuarioMailId` bigint(20) NOT NULL,
  `groupId` bigint(20) DEFAULT NULL,
  `companyId` bigint(20) DEFAULT NULL,
  `userId` bigint(20) DEFAULT NULL,
  `createDate` datetime DEFAULT NULL,
  `nombre` varchar(75) DEFAULT NULL,
  `correo` varchar(75) DEFAULT NULL,
  `telefono` varchar(75) DEFAULT NULL,
  `direccion` varchar(75) DEFAULT NULL,
  `mensaje` varchar(75) DEFAULT NULL,
  PRIMARY KEY (`usuarioMailId`),
  KEY `IX_114B6895` (`createDate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of it_usuariomail
-- ----------------------------
INSERT INTO `it_usuariomail` VALUES ('1', '1', '1', '1', '2017-07-14 19:45:23', 'Mario', 'maplacenciap@gmail.com', '+56942130102', 'calle uno casa 1695 los fresnos concepcion', 'estoy buscando sw a la medida favor comunicarse conmigo gracias.-');
INSERT INTO `it_usuariomail` VALUES ('2', '1', '1', '1', '2017-07-14 19:50:05', 'Mario', 'maplacenciap@gmail.com', '+56942130102', 'calle uno casa 1695 los fresnos concepcion', 'estoy buscando sw a la medida favor comunicarse conmigo gracias.-');
INSERT INTO `it_usuariomail` VALUES ('3', '20181', '20154', '20158', '2017-07-14 20:16:51', 'Mario', 'maplacenciap@gmail.com', '123123', 'asdasdasdasd', 'un mensaje');
INSERT INTO `it_usuariomail` VALUES ('4', '20181', '20154', '20158', '2017-07-14 22:15:10', 'asd', 'asdasd', 'asdadasd', 'asdasd', 'asdad');
INSERT INTO `it_usuariomail` VALUES ('5', '20181', '20154', '20158', '2017-07-17 11:54:03', 'mario', 'maplacenciap@gmail.com', '123123123', 'calle uno', 'me gusta tu web');
INSERT INTO `it_usuariomail` VALUES ('6', '20181', '20154', '20158', '2017-07-17 12:21:17', 'mario', '1123', '123', '123', '123');
INSERT INTO `it_usuariomail` VALUES ('7', '20181', '20154', '20158', '2017-07-17 12:27:26', '123', '123', '123', '123', '123');
INSERT INTO `it_usuariomail` VALUES ('8', '20181', '20154', '20158', '2017-07-17 12:44:51', '2', '2', '2', '2', '2');
INSERT INTO `it_usuariomail` VALUES ('9', '1', '1', '1', '2017-07-17 18:27:32', '1', '1', '1', '1', '1');
INSERT INTO `it_usuariomail` VALUES ('10', '20181', '20154', '20158', '2017-07-17 19:01:17', 'vcv', 'fdfd', 'sdfsdf', 'sdfsdf', 'sdfsdf');
INSERT INTO `it_usuariomail` VALUES ('11', '20181', '20154', '20158', '2017-07-17 19:04:11', 'aa', 'aa', 'aa', 'aa', 'aa');
