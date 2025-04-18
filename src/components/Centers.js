import React, { useState } from 'react';
import { 
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Link
} from '@mui/material';
import { LocationOn, Home, Public, PinDrop, OpenInNew } from '@mui/icons-material';

const allCenters = [
  { id: 1, awcId: 724963, name: 'Almala - 1 Awc', code: '27524040101', type: 'Regular', sectorId: 26566, latitude: 18.304928, longitude: 76.481792, lgdCode: 560620, areaType: 'Rural', village: 'ALMALA', block: 'AUSA', gpName: 'AALMALA' },
  { id: 2, awcId: 724965, name: 'Almala - 2 Awc', code: '27524040102', type: 'Regular', sectorId: 26566, latitude: 18.306798, longitude: 76.483332, lgdCode: 560620, areaType: 'Rural', village: 'ALMALA', block: 'AUSA', gpName: 'AALMALA' },
  { id: 3, awcId: 724967, name: 'Almala - 3 Awc', code: '27524040103', type: 'Regular', sectorId: 26566, latitude: 18.295494, longitude: 76.475612, lgdCode: 560620, areaType: 'Rural', village: 'ALMALA', block: 'AUSA', gpName: 'AALMALA' },
  { id: 4, awcId: 724969, name: 'Almala - 4 Awc', code: '27524040104', type: 'Regular', sectorId: 26566, latitude: 18.306017, longitude: 76.481792, lgdCode: 560620, areaType: 'Rural', village: 'ALMALA', block: 'AUSA', gpName: 'AALMALA' },
  { id: 5, awcId: 724971, name: 'Almala - 5 Awc', code: '27524040105', type: 'Regular', sectorId: 26566, latitude: 18.295521, longitude: 76.475609, lgdCode: 560620, areaType: 'Rural', village: 'ALMALA', block: 'AUSA', gpName: 'AALMALA' },
  { id: 6, awcId: 724973, name: 'Almala Tanda-1 Awc', code: '27524040106', type: 'Regular', sectorId: 26566, latitude: 18.324149, longitude: 76.470641, lgdCode: 560620, areaType: 'Rural', village: 'ALMALA', block: 'AUSA', gpName: 'AALMALA' },
  { id: 7, awcId: 724929, name: 'Kalmata - 1 Awc', code: '27524040107', type: 'Regular', sectorId: 26566, latitude: 18.301004, longitude: 76.397676, lgdCode: 560596, areaType: 'Rural', village: 'KALMATA', block: 'AUSA', gpName: 'KALMATHA' },
  { id: 8, awcId: 724931, name: 'Kalmata - 2 Awc', code: '27524040108', type: 'Regular', sectorId: 26566, latitude: 18.301103, longitude: 76.39774, lgdCode: 560596, areaType: 'Rural', village: 'KALMATA', block: 'AUSA', gpName: 'KALMATHA' },
  { id: 9, awcId: 724927, name: 'Kawtha Kej - 1 Awc', code: '27524040109', type: 'Regular', sectorId: 26566, latitude: 18.321122, longitude: 76.374874, lgdCode: 560595, areaType: 'Rural', village: 'KAWTHA KEJ', block: 'AUSA', gpName: 'KAWATHA KEJ' },
  { id: 10, awcId: 724947, name: 'Kulkarni Tanda-1 Awc', code: '27524040110', type: 'Regular', sectorId: 26566, latitude: 18.269073, longitude: 76.460584, lgdCode: 560599, areaType: 'Rural', village: 'SATDHARWADI', block: 'AUSA', gpName: 'SATADHARWADI' },
  { id: 11, awcId: 724937, name: 'Lakhangaon - 1 Awc', code: '27524040111', type: 'Regular', sectorId: 26566, latitude: 18.275563, longitude: 76.52299, lgdCode: 560598, areaType: 'Rural', village: 'LAKHANGAON', block: 'AUSA', gpName: 'LAKHANGAON' },
  { id: 12, awcId: 724939, name: 'Lakhangaon - 2 Awc', code: '27524040112', type: 'Regular', sectorId: 26566, latitude: 18.284291, longitude: 76.439845, lgdCode: 560598, areaType: 'Rural', village: 'LAKHANGAON', block: 'AUSA', gpName: 'LAKHANGAON' },
  { id: 13, awcId: 724941, name: 'Satdharwadi - 1 Awc', code: '27524040113', type: 'Regular', sectorId: 26566, latitude: 18.277573, longitude: 76.460876, lgdCode: 560599, areaType: 'Rural', village: 'SATDHARWADI', block: 'AUSA', gpName: 'SATADHARWADI' },
  { id: 14, awcId: 724943, name: 'Satdharwadi - 2 Awc', code: '27524040114', type: 'Regular', sectorId: 26566, latitude: 18.275256, longitude: 76.458845, lgdCode: 560599, areaType: 'Rural', village: 'SATDHARWADI', block: 'AUSA', gpName: 'SATADHARWADI' },
  { id: 15, awcId: 724949, name: 'Shivli - 1 Awc', code: '27524040115', type: 'Regular', sectorId: 26566, latitude: 18.219907, longitude: 76.33373, lgdCode: 560608, areaType: 'Rural', village: 'SHIVLI', block: 'AUSA', gpName: 'SHIWALI' },
  { id: 16, awcId: 724951, name: 'Shivli - 2 Awc', code: '27524040116', type: 'Regular', sectorId: 26566, latitude: 18.222075, longitude: 76.332848, lgdCode: 560608, areaType: 'Rural', village: 'SHIVLI', block: 'AUSA', gpName: 'SHIWALI' },
  { id: 17, awcId: 724953, name: 'Shivli - 3 Awc', code: '27524040117', type: 'Regular', sectorId: 26566, latitude: 18.222407, longitude: 76.330496, lgdCode: 560608, areaType: 'Rural', village: 'SHIVLI', block: 'AUSA', gpName: 'SHIWALI' },
  { id: 18, awcId: 724955, name: 'Shivli - 4 Awc', code: '27524040118', type: 'Regular', sectorId: 26566, latitude: 18.21958, longitude: 76.331174, lgdCode: 560608, areaType: 'Rural', village: 'SHIVLI', block: 'AUSA', gpName: 'SHIWALI' },
  { id: 19, awcId: 724957, name: 'Shivli - 5 Awc', code: '27524040119', type: 'Regular', sectorId: 26566, latitude: 18.222683, longitude: 76.334422, lgdCode: 560608, areaType: 'Rural', village: 'SHIVLI', block: 'AUSA', gpName: 'SHIWALI' },
  { id: 20, awcId: 724945, name: 'Sonpati Tanda-1 Awc', code: '27524040120', type: 'Regular', sectorId: 26566, latitude: 18.283277, longitude: 76.468207, lgdCode: 560600, areaType: 'Rural', village: 'SATTARDHARWADI LAMAN TANDA', block: 'AUSA', gpName: 'SATADHARWADI' },
  { id: 21, awcId: 724975, name: 'Umbadga Bk - 1 Awc', code: '27524040121', type: 'Regular', sectorId: 26566, latitude: 18.301664, longitude: 76.509285, lgdCode: 560621, areaType: 'Rural', village: 'UMBADGA BK.', block: 'AUSA', gpName: 'UMBADGA' },
  { id: 22, awcId: 724977, name: 'Umbadga Kh - 1 Awc', code: '27524040122', type: 'Regular', sectorId: 26566, latitude: 18.288913, longitude: 76.506397, lgdCode: 560637, areaType: 'Rural', village: 'UMBADGA KH.', block: 'AUSA', gpName: 'UMBADGA (KH)' },
  { id: 23, awcId: 724933, name: 'Uti Bk - 1 Awc', code: '27524040123', type: 'Regular', sectorId: 26566, latitude: 18.29375, longitude: 76.431743, lgdCode: 560597, areaType: 'Rural', village: 'UTI BK.', block: 'AUSA', gpName: 'UTTI (BK)' },
  { id: 24, awcId: 724935, name: 'Uti Bk - 2 Awc', code: '27524040124', type: 'Regular', sectorId: 26566, latitude: 18.293706, longitude: 76.431772, lgdCode: 560597, areaType: 'Rural', village: 'UTI BK.', block: 'AUSA', gpName: 'UTTI (BK)' },
  { id: 25, awcId: 724959, name: 'Warwada - 1 Awc', code: '27524040125', type: 'Regular', sectorId: 26566, latitude: 18.237892, longitude: 76.372229, lgdCode: 560609, areaType: 'Rural', village: 'WARWADA', block: 'AUSA', gpName: 'WARWADA' },
  { id: 26, awcId: 724961, name: 'Warwada - 2 Awc', code: '27524040126', type: 'Regular', sectorId: 26566, latitude: 18.225264, longitude: 76.372426, lgdCode: 560609, areaType: 'Rural', village: 'WARWADA', block: 'AUSA', gpName: 'WARWADA' },
  { id: 27, awcId: 724995, name: 'Belkund  1 Awc', code: '27524040201', type: 'Regular', sectorId: 26567, latitude: 18.163183, longitude: 76.397911, lgdCode: 560680, areaType: 'Rural', village: 'BELKUND', block: 'AUSA', gpName: 'BELKUND' },
  { id: 28, awcId: 724997, name: 'Belkund  2 Awc', code: '27524040202', type: 'Regular', sectorId: 26567, latitude: 18.161119, longitude: 76.398362, lgdCode: 560680, areaType: 'Rural', village: 'BELKUND', block: 'AUSA', gpName: 'BELKUND' },
  { id: 29, awcId: 724999, name: 'Belkund - 3 Awc', code: '27524040203', type: 'Regular', sectorId: 26567, latitude: 18.164416, longitude: 76.400582, lgdCode: 560680, areaType: 'Rural', village: 'BELKUND', block: 'AUSA', gpName: 'BELKUND' },
  { id: 30, awcId: 725034, name: 'Borphal 1 Awc', code: '27524040204', type: 'Regular', sectorId: 26567, latitude: 18.213302, longitude: 76.466216, lgdCode: 560642, areaType: 'Rural', village: 'BORPHAL', block: 'AUSA', gpName: 'BORFAL' },
  { id: 31, awcId: 725037, name: 'Borphal - 2 Awc', code: '27524040205', type: 'Regular', sectorId: 26567, latitude: 18.212251, longitude: 76.466517, lgdCode: 560642, areaType: 'Rural', village: 'BORPHAL', block: 'AUSA', gpName: 'BORFAL' },
  { id: 32, awcId: 725038, name: 'Borphal - 3 Awc', code: '27524040206', type: 'Regular', sectorId: 26567, latitude: 18.211887, longitude: 76.466476, lgdCode: 560642, areaType: 'Rural', village: 'BORPHAL', block: 'AUSA', gpName: 'BORFAL' },
  { id: 33, awcId: 725040, name: 'Borphal Tanda-1 Awc', code: '27524040207', type: 'Regular', sectorId: 26567, latitude: 18.216895, longitude: 76.435209, lgdCode: 560642, areaType: 'Rural', village: 'BORPHAL', block: 'AUSA', gpName: 'BORFAL' },
  { id: 34, awcId: 725001, name: 'Chincholi Son - 1 Awc', code: '27524040208', type: 'Regular', sectorId: 26567, latitude: 18.169058, longitude: 76.428275, lgdCode: 560681, areaType: 'Rural', village: 'CHINCHOLI SON', block: 'AUSA', gpName: 'CHINCHOLI SON' },
  { id: 35, awcId: 725004, name: 'Chincholi Son - 2 Awc', code: '27524040209', type: 'Regular', sectorId: 26567, latitude: 18.163919, longitude: 76.422882, lgdCode: 560681, areaType: 'Rural', village: 'CHINCHOLI SON', block: 'AUSA', gpName: 'CHINCHOLI SON' },
  { id: 36, awcId: 725020, name: 'Hipparga  1 Awc', code: '27524040210', type: 'Regular', sectorId: 26567, latitude: 18.138669, longitude: 76.410207, lgdCode: 560688, areaType: 'Rural', village: 'HIPPARGA', block: 'AUSA', gpName: 'HIPPARGA' },
  { id: 37, awcId: 725022, name: 'Hipparga  2 Awc', code: '27524040211', type: 'Regular', sectorId: 26567, latitude: 18.137413, longitude: 76.415235, lgdCode: 560688, areaType: 'Rural', village: 'HIPPARGA', block: 'AUSA', gpName: 'HIPPARGA' },
  { id: 38, awcId: 725024, name: 'Hippargapati-1 Awc', code: '27524040212', type: 'Regular', sectorId: 26567, latitude: 18.143427, longitude: 76.427623, lgdCode: 560688, areaType: 'Rural', village: 'HIPPARGA', block: 'AUSA', gpName: 'HIPPARGA' },
  { id: 39, awcId: 725042, name: 'Kawali - 1 Awc', code: '27524040213', type: 'Regular', sectorId: 26567, latitude: 18.114618, longitude: 76.417607, lgdCode: 560696, areaType: 'Rural', village: 'KAWALI', block: 'AUSA', gpName: 'KAWALI' },
  { id: 40, awcId: 725033, name: 'Khanapur Tanda 1Awc', code: '27524040214', type: 'Regular', sectorId: 26567, latitude: 18.233132, longitude: 76.458997, lgdCode: 560640, areaType: 'Rural', village: 'KHANAPUR', block: 'AUSA', gpName: 'BORFAL' },
  { id: 41, awcId: 725044, name: 'Malkondji - 1 Awc', code: '27524040215', type: 'Regular', sectorId: 26567, latitude: 18.115653, longitude: 76.447499, lgdCode: 560699, areaType: 'Rural', village: 'MALKONDJI', block: 'AUSA', gpName: 'MALKONDJI' },
  { id: 42, awcId: 725046, name: 'Malkondji - 2 Awc', code: '27524040216', type: 'Regular', sectorId: 26567, latitude: 18.117221, longitude: 76.447342, lgdCode: 560699, areaType: 'Rural', village: 'MALKONDJI', block: 'AUSA', gpName: 'MALKONDJI' },
  { id: 43, awcId: 725048, name: 'Malkondji - 3 Awc', code: '27524040217', type: 'Regular', sectorId: 26567, latitude: 18.117185, longitude: 76.447377, lgdCode: 560699, areaType: 'Rural', village: 'MALKONDJI', block: 'AUSA', gpName: 'MALKONDJI' },
  { id: 44, awcId: 725018, name: 'Malubra 1 Awc', code: '27524040218', type: 'Regular', sectorId: 26567, latitude: 18.141668, longitude: 76.431675, lgdCode: 560687, areaType: 'Rural', village: 'MALUMBRA', block: 'AUSA', gpName: 'MALUMBRA' },
  { id: 45, awcId: 725051, name: 'Malubra 2 Awc', code: '27524040219', type: 'Regular', sectorId: 26567, latitude: 18.139591, longitude: 76.443522, lgdCode: 560687, areaType: 'Rural', village: 'MALUMBRA', block: 'AUSA', gpName: 'MALUMBRA' },
  { id: 46, awcId: 724993, name: 'Manohar Tanda 1 Awc', code: '27524040220', type: 'Regular', sectorId: 26567, latitude: 18.189852, longitude: 76.416696, lgdCode: 560615, areaType: 'Rural', village: 'SHINDALA LOHARA', block: 'AUSA', gpName: 'SINDALA (LO)' },
  { id: 47, awcId: 725016, name: 'Masalga Kh - 1 Awc', code: '27524040221', type: 'Regular', sectorId: 26567, latitude: 18.136713, longitude: 76.462293, lgdCode: 560686, areaType: 'Rural', village: 'MASALGA KH.', block: 'AUSA', gpName: 'MASALGA (KH)' },
  { id: 48, awcId: 724989, name: 'Sindal Lohara  1 Awc', code: '27524040222', type: 'Regular', sectorId: 26567, latitude: 18.192969, longitude: 76.42384, lgdCode: 560615, areaType: 'Rural', village: 'SHINDALA LOHARA', block: 'AUSA', gpName: 'SINDALA (LO)' },
  { id: 49, awcId: 724991, name: 'Sindal Lohara  2 Awc', code: '27524040223', type: 'Regular', sectorId: 26567, latitude: 18.191121, longitude: 76.430145, lgdCode: 560615, areaType: 'Rural', village: 'SHINDALA LOHARA', block: 'AUSA', gpName: 'SINDALA (LO)' },
  { id: 50, awcId: 724979, name: 'Sindalawadi - 1 Awc', code: '27524040224', type: 'Regular', sectorId: 26567, latitude: 18.195085, longitude: 76.427926, lgdCode: 560613, areaType: 'Rural', village: 'SHINDALWADI', block: 'AUSA', gpName: 'SINDALWADI' },
  { id: 51, awcId: 725026, name: 'Tavshi Tad - 1 Awc', code: '27524040225', type: 'Regular', sectorId: 26567, latitude: 18.146446, longitude: 76.376829, lgdCode: 560689, areaType: 'Rural', village: 'TAVSHITAD', block: 'AUSA', gpName: 'TAWASHI TAD' },
  { id: 52, awcId: 725028, name: 'Tavshi Tad - 2 Awc', code: '27524040226', type: 'Regular', sectorId: 26567, latitude: 18.149047, longitude: 76.381922, lgdCode: 560689, areaType: 'Rural', village: 'TAVSHITAD', block: 'AUSA', gpName: 'TAWASHI TAD' },
  { id: 53, awcId: 725030, name: 'Tavshi Tad - 3 Awc', code: '27524040227', type: 'Regular', sectorId: 26567, latitude: 18.147573, longitude: 76.379878, lgdCode: 560689, areaType: 'Rural', village: 'TAVSHITAD', block: 'AUSA', gpName: 'TAWASHI TAD' },
  { id: 54, awcId: 724981, name: 'Tembi - 1 Awc', code: '27524040228', type: 'Regular', sectorId: 26567, latitude: 18.232462, longitude: 76.432988, lgdCode: 560613, areaType: 'Rural', village: 'SHINDALWADI', block: 'AUSA', gpName: 'SINDALWADI' },
  { id: 55, awcId: 725006, name: 'Tungi Bk  1 Awc', code: '27524040229', type: 'Regular', sectorId: 26567, latitude: 18.163339, longitude: 76.467029, lgdCode: 560682, areaType: 'Rural', village: 'TUNGI BK.', block: 'AUSA', gpName: 'TUNGI (BU)' },
  { id: 56, awcId: 725008, name: 'Tungi Bk  2 Awc', code: '27524040230', type: 'Regular', sectorId: 26567, latitude: 18.164416, longitude: 76.46153, lgdCode: 560682, areaType: 'Rural', village: 'TUNGI BK.', block: 'AUSA', gpName: 'TUNGI (BU)' },
  { id: 57, awcId: 725010, name: 'Tungi Bk - 3 Awc', code: '27524040231', type: 'Regular', sectorId: 26567, latitude: 18.1548, longitude: 76.463357, lgdCode: 560682, areaType: 'Rural', village: 'TUNGI BK.', block: 'AUSA', gpName: 'TUNGI (BU)' },
  { id: 58, awcId: 725012, name: 'Tungi Bk  4 Awc', code: '27524040232', type: 'Regular', sectorId: 26567, latitude: 18.164413, longitude: 76.463086, lgdCode: 560682, areaType: 'Rural', village: 'TUNGI BK.', block: 'AUSA', gpName: 'TUNGI (BU)' },
  { id: 59, awcId: 725014, name: 'Tungi Kh - 1 Awc', code: '27524040233', type: 'Regular', sectorId: 26567, latitude: 18.168629, longitude: 76.473383, lgdCode: 560683, areaType: 'Rural', village: 'TUNGI KH.', block: 'AUSA', gpName: 'MALUMBRA' },
  { id: 60, awcId: 724983, name: 'Wanwada - 1 Awc', code: '27524040234', type: 'Regular', sectorId: 26567, latitude: 18.190182, longitude: 76.466668, lgdCode: 560614, areaType: 'Rural', village: 'WANWADA', block: 'AUSA', gpName: 'WANWADA' },
  { id: 61, awcId: 724985, name: 'Wanwada - 2 Awc', code: '27524040235', type: 'Regular', sectorId: 26567, latitude: 18.190189, longitude: 76.466696, lgdCode: 560614, areaType: 'Rural', village: 'WANWADA', block: 'AUSA', gpName: 'WANWADA' },
  { id: 62, awcId: 724987, name: 'Wanwada - 3 Awc', code: '27524040236', type: 'Regular', sectorId: 26567, latitude: 18.189678, longitude: 76.468934, lgdCode: 560614, areaType: 'Rural', village: 'WANWADA', block: 'AUSA', gpName: 'WANWADA' },
  { id: 63, awcId: 724897, name: 'Andora - 1 Awc', code: '27524040301', type: 'Regular', sectorId: 26564, latitude: 18.275477, longitude: 76.334964, lgdCode: 560606, areaType: 'Rural', village: 'ANDHORA', block: 'AUSA', gpName: 'AANDORA' },
  { id: 64, awcId: 724899, name: 'Andora - 2 Awc', code: '27524040302', type: 'Regular', sectorId: 26564, latitude: 18.277385, longitude: 76.334326, lgdCode: 560606, areaType: 'Rural', village: 'ANDHORA', block: 'AUSA', gpName: 'AANDORA' },
  { id: 65, awcId: 724901, name: 'Andora - 3 Awc', code: '27524040303', type: 'Regular', sectorId: 26564, latitude: 18.278043, longitude: 76.335326, lgdCode: 560606, areaType: 'Rural', village: 'ANDHORA', block: 'AUSA', gpName: 'AANDORA' },
  { id: 66, awcId: 724921, name: 'Andora-4 Awc', code: '27524040304', type: 'Regular', sectorId: 26564, latitude: 18.27588, longitude: 76.335316, lgdCode: 560606, areaType: 'Rural', village: 'ANDHORA', block: 'AUSA', gpName: 'AANDORA' },
  { id: 67, awcId: 724918, name: 'Ausa Tanda - 1 Awc', code: '27524040305', type: 'Regular', sectorId: 26564, latitude: 18.254648, longitude: 76.489382, lgdCode: 560599, areaType: 'Rural', village: 'SATDHARWADI', block: 'AUSA', gpName: 'SATADHARWADI' },
  { id: 68, awcId: 724873, name: 'Barhanpur - 1 Awc', code: '27524040306', type: 'Regular', sectorId: 26564, latitude: 18.265277, longitude: 76.415445, lgdCode: 560602, areaType: 'Rural', village: 'BARHANPUR', block: 'AUSA', gpName: 'BARHANPUR' },
  { id: 69, awcId: 724875, name: 'Bhada - 1 Awc', code: '27524040307', type: 'Regular', sectorId: 26564, latitude: 18.271, longitude: 76.383775, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 70, awcId: 724877, name: 'Bhada - 2 Awc', code: '27524040308', type: 'Regular', sectorId: 26564, latitude: 18.267456, longitude: 76.391792, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 71, awcId: 724879, name: 'Bhada - 3 Awc', code: '27524040309', type: 'Regular', sectorId: 26564, latitude: 18.252466, longitude: 76.499502, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 72, awcId: 724881, name: 'Bhada - 4 Awc', code: '27524040310', type: 'Regular', sectorId: 26564, latitude: 18.267334, longitude: 76.387984, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 73, awcId: 724883, name: 'Bhada - 5 Awc', code: '27524040311', type: 'Regular', sectorId: 26564, latitude: 18.270422, longitude: 76.391136, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 74, awcId: 724885, name: 'Bhada - 6 Awc', code: '27524040312', type: 'Regular', sectorId: 26564, latitude: 18.278171, longitude: 76.372229, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 75, awcId: 724887, name: 'Bhada - 7 Awc', code: '27524040313', type: 'Regular', sectorId: 26564, latitude: 18.270379, longitude: 76.3911, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 76, awcId: 724861, name: 'Bheta - 1 Awc', code: '27524040314', type: 'Regular', sectorId: 26564, latitude: 18.306208, longitude: 76.326794, lgdCode: 560593, areaType: 'Rural', village: 'BHETA', block: 'AUSA', gpName: 'BHETA' },
  { id: 77, awcId: 724863, name: 'Bheta - 2 Awc', code: '27524040315', type: 'Regular', sectorId: 26564, latitude: 18.307319, longitude: 76.330734, lgdCode: 560593, areaType: 'Rural', village: 'BHETA', block: 'AUSA', gpName: 'BHETA' },
  { id: 78, awcId: 724865, name: 'Bheta - 3 Awc', code: '27524040316', type: 'Regular', sectorId: 26564, latitude: 18.307814, longitude: 76.330359, lgdCode: 560593, areaType: 'Rural', village: 'BHETA', block: 'AUSA', gpName: 'BHETA' },
  { id: 79, awcId: 724867, name: 'Bheta - 4 Awc', code: '27524040317', type: 'Regular', sectorId: 26564, latitude: 18.306715, longitude: 76.32482, lgdCode: 560593, areaType: 'Rural', village: 'BHETA', block: 'AUSA', gpName: 'BHETA' },
  { id: 80, awcId: 724889, name: 'Borgaon N. - 1 Awc', code: '27524040318', type: 'Regular', sectorId: 26564, latitude: 18.300714, longitude: 76.357759, lgdCode: 560604, areaType: 'Rural', village: 'BORGAON', block: 'AUSA', gpName: 'BORGAON (N)' },
  { id: 81, awcId: 724891, name: 'Borgaon N. - 2 Awc', code: '27524040319', type: 'Regular', sectorId: 26564, latitude: 18.301541, longitude: 76.358547, lgdCode: 560604, areaType: 'Rural', village: 'BORGAON', block: 'AUSA', gpName: 'BORGAON (N)' },
  { id: 82, awcId: 724893, name: 'Borgaon N. - 3 Awc', code: '27524040320', type: 'Regular', sectorId: 26564, latitude: 18.301227, longitude: 76.359862, lgdCode: 560604, areaType: 'Rural', village: 'BORGAON', block: 'AUSA', gpName: 'BORGAON (N)' },
  { id: 83, awcId: 724871, name: 'Haldurg - 1 Awc', code: '27524040321', type: 'Regular', sectorId: 26564, latitude: 18.255949, longitude: 76.441666, lgdCode: 560601, areaType: 'Rural', village: 'HALDURG', block: 'AUSA', gpName: 'BARHANPUR' },
  { id: 84, awcId: 724903, name: 'Jayphal - 1 Awc', code: '27524040322', type: 'Regular', sectorId: 26564, latitude: 18.250053, longitude: 76.303175, lgdCode: 560607, areaType: 'Rural', village: 'JAYPHAL', block: 'AUSA', gpName: 'JAIFAL' },
  { id: 85, awcId: 724923, name: 'Jayphal-2 Awc', code: '27524040323', type: 'Regular', sectorId: 26564, latitude: 18.252784, longitude: 76.305091, lgdCode: 560607, areaType: 'Rural', village: 'JAYPHAL', block: 'AUSA', gpName: 'JAIFAL' },
  { id: 86, awcId: 724905, name: 'Korangala - 1 Awc', code: '27524040324', type: 'Regular', sectorId: 26564, latitude: 18.239916, longitude: 76.418066, lgdCode: 560611, areaType: 'Rural', village: 'KORANGALA', block: 'AUSA', gpName: 'KORANGALA' },
  { id: 87, awcId: 724907, name: 'Korangala - 2 Awc', code: '27524040325', type: 'Regular', sectorId: 26564, latitude: 18.251153, longitude: 76.435519, lgdCode: 560611, areaType: 'Rural', village: 'KORANGALA', block: 'AUSA', gpName: 'KORANGALA' },
  { id: 88, awcId: 724869, name: 'Naholi -1 Awc', code: '27524040326', type: 'Regular', sectorId: 26564, latitude: 18.307999, longitude: 76.330267, lgdCode: 560594, areaType: 'Rural', village: 'NAHOLI', block: 'AUSA', gpName: 'BORGAON (N)' },
  { id: 89, awcId: 724908, name: 'Samdarga - 1 Awc', code: '27524040327', type: 'Regular', sectorId: 26564, latitude: 18.255301, longitude: 76.432627, lgdCode: 560612, areaType: 'Rural', village: 'SAMDARGA', block: 'AUSA', gpName: 'SAMDARGA' },
  { id: 90, awcId: 724910, name: 'Samdarga - 2 Awc', code: '27524040328', type: 'Regular', sectorId: 26564, latitude: 18.256649, longitude: 76.431181, lgdCode: 560612, areaType: 'Rural', village: 'SAMDARGA', block: 'AUSA', gpName: 'SAMDARGA' },
  { id: 91, awcId: 724925, name: 'Shinde Wadi-1 Awc', code: '27524040329', type: 'Regular', sectorId: 26564, latitude: 18.288805, longitude: 76.40532, lgdCode: 560603, areaType: 'Rural', village: 'BHADA', block: 'AUSA', gpName: 'BHADA' },
  { id: 92, awcId: 724895, name: 'Wadji - 1 Awc', code: '27524040330', type: 'Regular', sectorId: 26564, latitude: 18.277163, longitude: 76.351659, lgdCode: 560605, areaType: 'Rural', village: 'WADJI', block: 'AUSA', gpName: 'WADJI' },
  { id: 93, awcId: 724912, name: 'Yelori - 1 Awc', code: '27524040331', type: 'Regular', sectorId: 26564, latitude: 18.203926, longitude: 76.390897, lgdCode: 560616, areaType: 'Rural', village: 'YELORI', block: 'AUSA', gpName: 'YELLORI' },
  { id: 94, awcId: 724914, name: 'Yelori - 2 Awc', code: '27524040332', type: 'Regular', sectorId: 26564, latitude: 18.204553, longitude: 76.394506, lgdCode: 560616, areaType: 'Rural', village: 'YELORI', block: 'AUSA', gpName: 'YELLORI' },
  { id: 95, awcId: 724916, name: 'Yeloriwadi - 1 Awc', code: '27524040333', type: 'Regular', sectorId: 26564, latitude: 18.224608, longitude: 76.399809, lgdCode: 560610, areaType: 'Rural', village: 'YELORIWADI', block: 'AUSA', gpName: 'YELLORIWADI' },
  { id: 96, awcId: 725151, name: 'Apchunda - 1 Awc', code: '27524040401', type: 'Regular', sectorId: 26570, latitude: 18.20708, longitude: 76.611169, lgdCode: 560657, areaType: 'Rural', village: 'APCHUNDA', block: 'AUSA', gpName: 'AAPCHUNDA' },
  { id: 97, awcId: 725153, name: 'Apchunda - 2 Awc', code: '27524040402', type: 'Regular', sectorId: 26570, latitude: 18.206834, longitude: 76.608398, lgdCode: 560657, areaType: 'Rural', village: 'APCHUNDA', block: 'AUSA', gpName: 'AAPCHUNDA' },
  { id: 98, awcId: 725144, name: 'Bhangewadi - 1 Awc', code: '27524040403', type: 'Regular', sectorId: 26570, latitude: 18.252134, longitude: 76.642851, lgdCode: 560654, areaType: 'Rural', village: 'BHANGEWADI', block: 'AUSA', gpName: 'BHANGEWADI' },
  { id: 99, awcId: 725092, name: 'Budhoda - 1 Awc', code: '27524040404', type: 'Regular', sectorId: 26570, latitude: 18.303547, longitude: 76.533874, lgdCode: 560622, areaType: 'Rural', village: 'BUDHODA', block: 'AUSA', gpName: 'BUDHODA' },
  { id: 100, awcId: 725094, name: 'Budhoda - 2 Awc', code: '27524040405', type: 'Regular', sectorId: 26570, latitude: 18.308961, longitude: 76.538165, lgdCode: 560622, areaType: 'Rural', village: 'BUDHODA', block: 'AUSA', gpName: 'BUDHODA' },
  { id: 101, awcId: 725096, name: 'Budhoda - 3 Awc', code: '27524040406', type: 'Regular', sectorId: 26570, latitude: 18.30264, longitude: 76.535462, lgdCode: 560622, areaType: 'Rural', village: 'BUDHODA', block: 'AUSA', gpName: 'BUDHODA' },
  { id: 102, awcId: 725098, name: 'Budhoda - 4 Awc', code: '27524040407', type: 'Regular', sectorId: 26570, latitude: 18.300326, longitude: 76.534191, lgdCode: 560622, areaType: 'Rural', village: 'BUDHODA', block: 'AUSA', gpName: 'BUDHODA' },
  { id: 103, awcId: 725100, name: 'Hasala - 1 Awc', code: '27524040408', type: 'Regular', sectorId: 26570, latitude: 18.323278, longitude: 76.559496, lgdCode: 560623, areaType: 'Rural', village: 'HASALA', block: 'AUSA', gpName: 'HASALA' },
  { id: 104, awcId: 725134, name: 'Jainagar - 1 Awc', code: '27524040409', type: 'Regular', sectorId: 26570, latitude: 18.224039, longitude: 76.599508, lgdCode: 560652, areaType: 'Rural', village: 'JAINAGAR', block: 'AUSA', gpName: 'JAINAGAR' },
  { id: 105, awcId: 725130, name: 'Kanheri - 1 Awc', code: '27524040410', type: 'Regular', sectorId: 26570, latitude: 18.231621, longitude: 76.57283, lgdCode: 560651, areaType: 'Rural', village: 'KANHERI', block: 'AUSA', gpName: 'KANHERI' },
  { id: 106, awcId: 725132, name: 'Kanheri - 2 Awc', code: '27524040411', type: 'Regular', sectorId: 26570, latitude: 18.231685, longitude: 76.572803, lgdCode: 560651, areaType: 'Rural', village: 'KANHERI', block: 'AUSA', gpName: 'KANHERI' },
  { id: 107, awcId: 725102, name: 'Khuntegaon - 1 Awc', code: '27524040412', type: 'Regular', sectorId: 26570, latitude: 18.295636, longitude: 76.581911, lgdCode: 560635, areaType: 'Rural', village: 'KHUNTEGAON', block: 'AUSA', gpName: 'KHUNTEGAON' },
  { id: 108, awcId: 725104, name: 'Khuntegaon - 2 Awc', code: '27524040413', type: 'Regular', sectorId: 26570, latitude: 18.296141, longitude: 76.584165, lgdCode: 560635, areaType: 'Rural', village: 'KHUNTEGAON', block: 'AUSA', gpName: 'KHUNTEGAON' },
  { id: 109, awcId: 725106, name: 'Khuntegaon - 3 Awc', code: '27524040414', type: 'Regular', sectorId: 26570, latitude: 18.295816, longitude: 76.582248, lgdCode: 560635, areaType: 'Rural', village: 'KHUNTEGAON', block: 'AUSA', gpName: 'KHUNTEGAON' },
  { id: 110, awcId: 725136, name: 'Kinithot - 1 Awc', code: '27524040415', type: 'Regular', sectorId: 26570, latitude: 18.232268, longitude: 76.634823, lgdCode: 560653, areaType: 'Rural', village: 'KINITHOT', block: 'AUSA', gpName: 'KINITHOT' },
  { id: 111, awcId: 725138, name: 'Kinithot - 2 Awc', code: '27524040416', type: 'Regular', sectorId: 26570, latitude: 18.237675, longitude: 76.634338, lgdCode: 560653, areaType: 'Rural', village: 'KINITHOT', block: 'AUSA', gpName: 'KINITHOT' },
  { id: 112, awcId: 725140, name: 'Kinithot - 3 Awc', code: '27524040417', type: 'Regular', sectorId: 26570, latitude: 18.233999, longitude: 76.634222, lgdCode: 560653, areaType: 'Rural', village: 'KINITHOT', block: 'AUSA', gpName: 'KINITHOT' },
  { id: 113, awcId: 725142, name: 'Kinithot - 4 Awc', code: '27524040418', type: 'Regular', sectorId: 26570, latitude: 18.236355, longitude: 76.634284, lgdCode: 560653, areaType: 'Rural', village: 'KINITHOT', block: 'AUSA', gpName: 'KINITHOT' },
  { id: 114, awcId: 725146, name: 'Mahadevwadi-1 Awc', code: '27524040419', type: 'Regular', sectorId: 26570, latitude: 18.29851, longitude: 76.534191, lgdCode: 560654, areaType: 'Rural', village: 'BHANGEWADI', block: 'AUSA', gpName: 'BHANGEWADI' },
  { id: 115, awcId: 725115, name: 'Nagobawadi-1 Awc', code: '27524040420', type: 'Regular', sectorId: 26570, latitude: 18.294649, longitude: 76.544121, lgdCode: 560636, areaType: 'Rural', village: 'SELU', block: 'AUSA', gpName: 'SELU' },
  { id: 116, awcId: 725124, name: 'Sarola - 1 Awc', code: '27524040421', type: 'Regular', sectorId: 26570, latitude: 18.257348, longitude: 76.582737, lgdCode: 560648, areaType: 'Rural', village: 'SAROLA', block: 'AUSA', gpName: 'SAROLA' },
  { id: 117, awcId: 725126, name: 'Sarola - 2 Awc', code: '27524040422', type: 'Regular', sectorId: 26570, latitude: 18.25907, longitude: 76.597402, lgdCode: 560648, areaType: 'Rural', village: 'SAROLA', block: 'AUSA', gpName: 'SAROLA' },
  { id: 118, awcId: 725128, name: 'Sarola - 3 Awc', code: '27524040423', type: 'Regular', sectorId: 26570, latitude: 18.25986, longitude: 76.589378, lgdCode: 560648, areaType: 'Rural', village: 'SAROLA', block: 'AUSA', gpName: 'SAROLA' },
  { id: 119, awcId: 725108, name: 'Selu - 1 Awc', code: '27524040424', type: 'Regular', sectorId: 26570, latitude: 18.281833, longitude: 76.553123, lgdCode: 560636, areaType: 'Rural', village: 'SELU', block: 'AUSA', gpName: 'SELU' },
  { id: 120, awcId: 725110, name: 'Selu - 2 Awc', code: '27524040425', type: 'Regular', sectorId: 26570, latitude: 18.281825, longitude: 76.553414, lgdCode: 560636, areaType: 'Rural', village: 'SELU', block: 'AUSA', gpName: 'SELU' },
  { id: 121, awcId: 725113, name: 'Selu - 3 Awc', code: '27524040426', type: 'Regular', sectorId: 26570, latitude: 18.303599, longitude: 76.533862, lgdCode: 560636, areaType: 'Rural', village: 'SELU', block: 'AUSA', gpName: 'SELU' },
  { id: 122, awcId: 725116, name: 'Yakatpur - 1 Awc', code: '27524040427', type: 'Regular', sectorId: 26570, latitude: 18.234388, longitude: 76.556589, lgdCode: 560646, areaType: 'Rural', village: 'YAKATPUR', block: 'AUSA', gpName: 'YAKATPUR' },
  { id: 123, awcId: 725118, name: 'Yakatpur - 2 Awc', code: '27524040428', type: 'Regular', sectorId: 26570, latitude: 18.236442, longitude: 76.548382, lgdCode: 560646, areaType: 'Rural', village: 'YAKATPUR', block: 'AUSA', gpName: 'YAKATPUR' },
  { id: 124, awcId: 725120, name: 'Yakatpur - 3 Awc', code: '27524040429', type: 'Regular', sectorId: 26570, latitude: 18.235096, longitude: 76.554094, lgdCode: 560646, areaType: 'Rural', village: 'YAKATPUR', block: 'AUSA', gpName: 'YAKATPUR' },
  { id: 125, awcId: 725122, name: 'Yearandi - 1 Awc', code: '27524040430', type: 'Regular', sectorId: 26570, latitude: 18.28172, longitude: 76.553338, lgdCode: 560647, areaType: 'Rural', village: 'YERANDI', block: 'AUSA', gpName: 'ERANDI' },
  { id: 126, awcId: 725154, name: 'Yearandi - 2 Awc', code: '27524040431', type: 'Regular', sectorId: 26570, latitude: 18.268818, longitude: 76.571038, lgdCode: 560647, areaType: 'Rural', village: 'YERANDI', block: 'AUSA', gpName: 'ERANDI' },
  { id: 127, awcId: 725148, name: 'Yeli - 1 Awc', code: '27524040432', type: 'Regular', sectorId: 26570, latitude: 18.225814, longitude: 76.650736, lgdCode: 560656, areaType: 'Rural', village: 'YELI', block: 'AUSA', gpName: 'YELI' },
  { id: 128, awcId: 725149, name: 'Yeli - 2 Awc', code: '27524040433', type: 'Regular', sectorId: 26570, latitude: 18.227359, longitude: 76.650626, lgdCode: 560656, areaType: 'Rural', village: 'YELI', block: 'AUSA', gpName: 'YELI' },
  { id: 129, awcId: 725194, name: 'Birawali - 1 Awc', code: '27524040501', type: 'Regular', sectorId: 26574, latitude: 18.193542, longitude: 76.328064, lgdCode: 560618, areaType: 'Rural', village: 'BIRAWALI', block: 'AUSA', gpName: 'BIRWALI' },
  { id: 130, awcId: 725196, name: 'Birawali - 2 Awc', code: '27524040502', type: 'Regular', sectorId: 26574, latitude: 18.193696, longitude: 76.328073, lgdCode: 560618, areaType: 'Rural', village: 'BIRAWALI', block: 'AUSA', gpName: 'BIRWALI' },
  { id: 131, awcId: 725198, name: 'Birawali-3 Awc', code: '27524040503', type: 'Regular', sectorId: 26574, latitude: 18.194034, longitude: 76.328212, lgdCode: 560618, areaType: 'Rural', village: 'BIRAWALI', block: 'AUSA', gpName: 'BIRWALI' },
  { id: 132, awcId: 725188, name: 'Chincholi Kajale -1 Awc', code: '27524040504', type: 'Regular', sectorId: 26574, latitude: 18.136789, longitude: 76.340461, lgdCode: 560690, areaType: 'Rural', village: 'CHINCHOLI KAJALE', block: 'AUSA', gpName: 'CHINCHOLI KAJALE' },
  { id: 133, awcId: 725190, name: 'Chincholi Kajale -2 Awc', code: '27524040505', type: 'Regular', sectorId: 26574, latitude: 18.135859, longitude: 76.367625, lgdCode: 560690, areaType: 'Rural', village: 'CHINCHOLI KAJALE', block: 'AUSA', gpName: 'CHINCHOLI KAJALE' },
  { id: 134, awcId: 725192, name: 'Chincholi Kajale -3 Awc', code: '27524040506', type: 'Regular', sectorId: 26574, latitude: 18.136837, longitude: 76.340501, lgdCode: 560690, areaType: 'Rural', village: 'CHINCHOLI KAJALE', block: 'AUSA', gpName: 'CHINCHOLI KAJALE' },
  { id: 135, awcId: 725210, name: 'Gulkheda - 1 Awc', code: '27524040507', type: 'Regular', sectorId: 26574, latitude: 18.195228, longitude: 76.379209, lgdCode: 560679, areaType: 'Rural', village: 'GULKHEDA', block: 'AUSA', gpName: 'GULKHEDA' },
  { id: 136, awcId: 725212, name: 'Gulkheda - 2 Awc', code: '27524040508', type: 'Regular', sectorId: 26574, latitude: 18.139654, longitude: 76.36825, lgdCode: 560679, areaType: 'Rural', village: 'GULKHEDA', block: 'AUSA', gpName: 'GULKHEDA' },
  { id: 137, awcId: 725214, name: 'Gulkhedawadi-1 awc', code: '27524040509', type: 'Regular', sectorId: 26574, latitude: 18.213529, longitude: 76.366441, lgdCode: 560679, areaType: 'Rural', village: 'GULKHEDA', block: 'AUSA', gpName: 'GULKHEDA' },
  { id: 138, awcId: 725220, name: 'Masurdi - 1 Awc', code: '27524040510', type: 'Regular', sectorId: 26574, latitude: 18.170652, longitude: 76.338355, lgdCode: 560678, areaType: 'Rural', village: 'MASURDI', block: 'AUSA', gpName: 'MASURDI' },
  { id: 139, awcId: 725222, name: 'Masurdi - 2 Awc', code: '27524040511', type: 'Regular', sectorId: 26574, latitude: 18.205846, longitude: 76.340392, lgdCode: 560678, areaType: 'Rural', village: 'MASURDI', block: 'AUSA', gpName: 'MASURDI' },
  { id: 140, awcId: 725224, name: 'Masurdi Mal-1 Awc', code: '27524040512', type: 'Regular', sectorId: 26574, latitude: 18.178002, longitude: 76.319145, lgdCode: 560678, areaType: 'Rural', village: 'MASURDI', block: 'AUSA', gpName: 'MASURDI' },
  { id: 141, awcId: 725208, name: 'Ringani - 1 Awc', code: '27524040513', type: 'Regular', sectorId: 26574, latitude: 18.198847, longitude: 76.376852, lgdCode: 560617, areaType: 'Rural', village: 'RINGANI', block: 'AUSA', gpName: 'GULKHEDA' },
  { id: 142, awcId: 725200, name: 'Taka - 1 Awc', code: '27524040514', type: 'Regular', sectorId: 26574, latitude: 18.16618, longitude: 76.355766, lgdCode: 560619, areaType: 'Rural', village: 'TAKA', block: 'AUSA', gpName: 'TAKA' },
  { id: 143, awcId: 725202, name: 'Taka - 2 Awc', code: '27524040515', type: 'Regular', sectorId: 26574, latitude: 18.167795, longitude: 76.350949, lgdCode: 560619, areaType: 'Rural', village: 'TAKA', block: 'AUSA', gpName: 'TAKA' },
  { id: 144, awcId: 725203, name: 'Taka - 3 Awc', code: '27524040516', type: 'Regular', sectorId: 26574, latitude: 18.169191, longitude: 76.352478, lgdCode: 560619, areaType: 'Rural', village: 'TAKA', block: 'AUSA', gpName: 'TAKA' },
  { id: 145, awcId: 725205, name: 'Taka - 4 Awc', code: '27524040517', type: 'Regular', sectorId: 26574, latitude: 18.167275, longitude: 76.352725, lgdCode: 560619, areaType: 'Rural', village: 'TAKA', block: 'AUSA', gpName: 'TAKA' },
  { id: 146, awcId: 725216, name: 'Wangji - 1 Awc', code: '27524040518', type: 'Regular', sectorId: 26574, latitude: 18.122372, longitude: 76.368207, lgdCode: 560695, areaType: 'Rural', village: 'WANGJI', block: 'AUSA', gpName: 'WANGAJI' },
  { id: 147, awcId: 725218, name: 'Wangji  2 Awc', code: '27524040519', type: 'Regular', sectorId: 26574, latitude: 18.125114, longitude: 76.366326, lgdCode: 560695, areaType: 'Rural', village: 'WANGJI', block: 'AUSA', gpName: 'WANGAJI' },
  { id: 148, awcId: 725226, name: 'Yekambiwadi - 1 Awc', code: '27524040520', type: 'Regular', sectorId: 26574, latitude: 18.183544, longitude: 76.29116, lgdCode: 560677, areaType: 'Rural', village: 'YEKAMBIWADI', block: 'AUSA', gpName: 'EKAMBI' },
  { id: 149, awcId: 725161, name: 'Bhusani - 1 Awc', code: '27524040601', type: 'Regular', sectorId: 26572, latitude: 18.343835, longitude: 76.651805, lgdCode: 560628, areaType: 'Rural', village: 'BHUSANI', block: 'AUSA', gpName: 'BHUSANI' },
  { id: 150, awcId: 725162, name: 'Bhusani - 2 Awc', code: '27524040602', type: 'Regular', sectorId: 26572, latitude: 18.343905, longitude: 76.651559, lgdCode: 560628, areaType: 'Rural', village: 'BHUSANI', block: 'AUSA', gpName: 'BHUSANI' },
  { id: 151, awcId: 725186, name: 'Dewangara - 1 Awc', code: '27524040603', type: 'Regular', sectorId: 26572, latitude: 18.258351, longitude: 76.675212, lgdCode: 560655, areaType: 'Rural', village: 'DEWANGA', block: 'AUSA', gpName: 'YELI' },
  { id: 152, awcId: 725159, name: 'Dhanora - 1 Awc', code: '27524040604', type: 'Regular', sectorId: 26572, latitude: 18.35167, longitude: 76.623031, lgdCode: 560627, areaType: 'Rural', village: 'DHANORA', block: 'AUSA', gpName: 'DHANORA' },
  { id: 153, awcId: 725160, name: 'Dhanora - 2 Awc', code: '27524040605', type: 'Regular', sectorId: 26572, latitude: 18.346394, longitude: 76.625205, lgdCode: 560627, areaType: 'Rural', village: 'DHANORA', block: 'AUSA', gpName: 'DHANORA' },
  { id: 154, awcId: 725170, name: 'Gondri - 1 Awc', code: '27524040606', type: 'Regular', sectorId: 26572, latitude: 18.313485, longitude: 76.644239, lgdCode: 560633, areaType: 'Rural', village: 'GONDRI', block: 'AUSA', gpName: 'GONDRI' },
  { id: 155, awcId: 725171, name: 'Gondri - 2 Awc', code: '27524040607', type: 'Regular', sectorId: 26572, latitude: 18.31867, longitude: 76.638924, lgdCode: 560633, areaType: 'Rural', village: 'GONDRI', block: 'AUSA', gpName: 'GONDRI' },
  { id: 156, awcId: 725172, name: 'Gondri - 3 Awc', code: '27524040608', type: 'Regular', sectorId: 26572, latitude: 18.312512, longitude: 76.644649, lgdCode: 560633, areaType: 'Rural', village: 'GONDRI', block: 'AUSA', gpName: 'GONDRI' },
  { id: 157, awcId: 725173, name: 'Hasegaon - 1 Awc', code: '27524040609', type: 'Regular', sectorId: 26572, latitude: 18.308899, longitude: 76.620971, lgdCode: 560634, areaType: 'Rural', village: 'HASEGAON', block: 'AUSA', gpName: 'HASEGAON' },
  { id: 158, awcId: 725174, name: 'Hasegaon - 2 Awc', code: '27524040610', type: 'Regular', sectorId: 26572, latitude: 18.314936, longitude: 76.624877, lgdCode: 560634, areaType: 'Rural', village: 'HASEGAON', block: 'AUSA', gpName: 'HASEGAON' },
  { id: 159, awcId: 725175, name: 'Hasegaon - 3 Awc', code: '27524040611', type: 'Regular', sectorId: 26572, latitude: 18.311758, longitude: 76.6234, lgdCode: 560634, areaType: 'Rural', village: 'HASEGAON', block: 'AUSA', gpName: 'HASEGAON' },
  { id: 160, awcId: 725176, name: 'Hasegaon - 4 Awc', code: '27524040612', type: 'Regular', sectorId: 26572, latitude: 18.314834, longitude: 76.624836, lgdCode: 560634, areaType: 'Rural', village: 'HASEGAON', block: 'AUSA', gpName: 'HASEGAON' },
  { id: 161, awcId: 725177, name: 'Hasegaon Tanda-1 Awc', code: '27524040613', type: 'Regular', sectorId: 26572, latitude: 18.307517, longitude: 76.606624, lgdCode: 560634, areaType: 'Rural', village: 'HASEGAON', block: 'AUSA', gpName: 'HASEGAON' },
  { id: 162, awcId: 725178, name: 'Hasegaon Wadi-1 Awc', code: '27524040614', type: 'Regular', sectorId: 26572, latitude: 18.274766, longitude: 76.613804, lgdCode: 560649, areaType: 'Rural', village: 'HASEGAONWADI', block: 'AUSA', gpName: 'HASEGAONWADI' },
  { id: 163, awcId: 725179, name: 'Hasegaon Wadi-2 Awc', code: '27524040615', type: 'Regular', sectorId: 26572, latitude: 18.388743, longitude: 76.551413, lgdCode: 560649, areaType: 'Rural', village: 'HASEGAONWADI', block: 'AUSA', gpName: 'HASEGAONWADI' },
  { id: 164, awcId: 725180, name: 'Hasegaon Wadi-3 Awc', code: '27524040616', type: 'Regular', sectorId: 26572, latitude: 18.275841, longitude: 76.614267, lgdCode: 560649, areaType: 'Rural', village: 'HASEGAONWADI', block: 'AUSA', gpName: 'HASEGAONWADI' },
  { id: 165, awcId: 725157, name: 'Hippar Soga - 1 Awc', code: '27524040617', type: 'Regular', sectorId: 26572, latitude: 18.32359, longitude: 76.606136, lgdCode: 560626, areaType: 'Rural', village: 'HIPPARSOGA', block: 'AUSA', gpName: 'HIPPARSOGA' },
  { id: 166, awcId: 725158, name: 'Hippar Soga - 2 Awc', code: '27524040618', type: 'Regular', sectorId: 26572, latitude: 18.324293, longitude: 76.601785, lgdCode: 560626, areaType: 'Rural', village: 'HIPPARSOGA', block: 'AUSA', gpName: 'HIPPARSOGA' },
  { id: 167, awcId: 725167, name: 'Holi - 1 Awc', code: '27524040619', type: 'Regular', sectorId: 26572, latitude: 18.58716, longitude: 76.547197, lgdCode: 560631, areaType: 'Rural', village: 'HOLI', block: 'AUSA', gpName: 'HOLI' },
  { id: 168, awcId: 725168, name: 'Holi - 2 Awc', code: '27524040620', type: 'Regular', sectorId: 26572, latitude: 18.312425, longitude: 76.694196, lgdCode: 560631, areaType: 'Rural', village: 'HOLI', block: 'AUSA', gpName: 'HOLI' },
  { id: 169, awcId: 725156, name: 'Jamalpur - 1 Awc', code: '27524040621', type: 'Regular', sectorId: 26572, latitude: 18.328477, longitude: 76.572483, lgdCode: 560625, areaType: 'Rural', village: 'JAMALPUR', block: 'AUSA', gpName: 'JAMALPUR' },
  { id: 170, awcId: 725169, name: 'Kawtha Latur - 1 Awc', code: '27524040622', type: 'Regular', sectorId: 26572, latitude: 18.288354, longitude: 76.691829, lgdCode: 560632, areaType: 'Rural', village: 'KAWTHA LATUR', block: 'AUSA', gpName: 'KAWATHA LATUR' },
  { id: 171, awcId: 725181, name: 'Lodga - 1 Awc', code: '27524040623', type: 'Regular', sectorId: 26572, latitude: 18.310428, longitude: 76.679568, lgdCode: 560650, areaType: 'Rural', village: 'LODGA', block: 'AUSA', gpName: 'LODGA' },
  { id: 172, awcId: 725182, name: 'Lodga - 2 Awc', code: '27524040624', type: 'Regular', sectorId: 26572, latitude: 18.311255, longitude: 76.675455, lgdCode: 560650, areaType: 'Rural', village: 'LODGA', block: 'AUSA', gpName: 'LODGA' },
  { id: 173, awcId: 725184, name: 'Lodga - 3 Awc', code: '27524040625', type: 'Regular', sectorId: 26572, latitude: 18.310633, longitude: 76.672432, lgdCode: 560650, areaType: 'Rural', village: 'LODGA', block: 'AUSA', gpName: 'LODGA' },
  { id: 174, awcId: 725163, name: 'Shivani Bk - 1 Awc', code: '27524040626', type: 'Regular', sectorId: 26572, latitude: 18.339202, longitude: 76.656973, lgdCode: 560629, areaType: 'Rural', village: 'SHIVANI BK.', block: 'AUSA', gpName: 'SHIWANI (BU)' },
  { id: 175, awcId: 725164, name: 'Shivani Bk - 2 Awc', code: '27524040627', type: 'Regular', sectorId: 26572, latitude: 18.332371, longitude: 76.663109, lgdCode: 560629, areaType: 'Rural', village: 'SHIVANI BK.', block: 'AUSA', gpName: 'SHIWANI (BU)' },
  { id: 176, awcId: 725165, name: 'Shivani Bk - 3 Awc', code: '27524040628', type: 'Regular', sectorId: 26572, latitude: 18.339202, longitude: 76.656973, lgdCode: 560629, areaType: 'Rural', village: 'SHIVANI BK.', block: 'AUSA', gpName: 'SHIWANI (BU)' },
  { id: 177, awcId: 725155, name: 'Sindala Jahagir -1 Awc', code: '27524040629', type: 'Regular', sectorId: 26572, latitude: 18.323516, longitude: 76.57249, lgdCode: 560624, areaType: 'Rural', village: 'SHINDALA JAHAGIR', block: 'AUSA', gpName: 'SINDALA (JAHGIR)' },
  { id: 178, awcId: 725166, name: 'Tondoli - 1 Awc', code: '27524040630', type: 'Regular', sectorId: 26572, latitude: 18.326576, longitude: 76.690352, lgdCode: 560630, areaType: 'Rural', village: 'TONDOLI', block: 'AUSA', gpName: 'KAWATHA LATUR' },
  { id: 179, awcId: 725068, name: 'Ashiv - 1 Awc', code: '27524040701', type: 'Regular', sectorId: 26569, latitude: 18.111213, longitude: 76.354741, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 180, awcId: 725070, name: 'Ashiv - 2 Awc', code: '27524040702', type: 'Regular', sectorId: 26569, latitude: 18.11164, longitude: 76.352209, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 181, awcId: 725072, name: 'Ashiv - 3 Awc', code: '27524040703', type: 'Regular', sectorId: 26569, latitude: 18.113886, longitude: 76.349528, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 182, awcId: 725074, name: 'Ashiv - 4 Awc', code: '27524040704', type: 'Regular', sectorId: 26569, latitude: 18.109858, longitude: 76.34943, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 183, awcId: 725076, name: 'Ashiv - 5 Awc', code: '27524040705', type: 'Regular', sectorId: 26569, latitude: 18.110521, longitude: 76.355099, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 184, awcId: 725078, name: 'Ashiv - 6 Awc', code: '27524040706', type: 'Regular', sectorId: 26569, latitude: 18.251593, longitude: 76.500494, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 185, awcId: 725080, name: 'Ashiv Tanda-1 Awc', code: '27524040707', type: 'Regular', sectorId: 26569, latitude: 18.070521, longitude: 76.352213, lgdCode: 560694, areaType: 'Rural', village: 'ASHIV', block: 'AUSA', gpName: 'ASHIV' },
  { id: 186, awcId: 725053, name: 'Ujani - 1 Awc', code: '27524040708', type: 'Regular', sectorId: 26569, latitude: 18.118352, longitude: 76.303603, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 187, awcId: 725055, name: 'Ujani - 2 Awc', code: '27524040709', type: 'Regular', sectorId: 26569, latitude: 18.1121, longitude: 76.307823, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 188, awcId: 725057, name: 'Ujani - 3 Awc', code: '27524040710', type: 'Regular', sectorId: 26569, latitude: 18.119198, longitude: 76.303711, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 189, awcId: 725059, name: 'Ujani - 4 Awc', code: '27524040711', type: 'Regular', sectorId: 26569, latitude: 18.108546, longitude: 76.312379, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 190, awcId: 725061, name: 'Ujani - 5 Awc', code: '27524040712', type: 'Regular', sectorId: 26569, latitude: 18.119431, longitude: 76.308909, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 191, awcId: 725063, name: 'Ujani - 6 Awc', code: '27524040713', type: 'Regular', sectorId: 26569, latitude: 18.107112, longitude: 76.314991, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 192, awcId: 725064, name: 'Ujani - 7 Awc', code: '27524040714', type: 'Regular', sectorId: 26569, latitude: 18.112347, longitude: 76.311497, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 193, awcId: 725066, name: 'Ujani - 8 Awc', code: '27524040715', type: 'Regular', sectorId: 26569, latitude: 18.119701, longitude: 76.306993, lgdCode: 560693, areaType: 'Rural', village: 'UJANI', block: 'AUSA', gpName: 'UJANI' },
  { id: 194, awcId: 725082, name: 'Yekambi - 1 Awc', code: '27524040716', type: 'Regular', sectorId: 26569, latitude: 18.159954, longitude: 76.295228, lgdCode: 560692, areaType: 'Rural', village: 'YEKAMBI', block: 'AUSA', gpName: 'EKAMBI' },
  { id: 195, awcId: 725084, name: 'Yekambi - 2 Awc', code: '27524040717', type: 'Regular', sectorId: 26569, latitude: 18.157268, longitude: 76.295517, lgdCode: 560692, areaType: 'Rural', village: 'YEKAMBI', block: 'AUSA', gpName: 'EKAMBI' },
  { id: 196, awcId: 725086, name: 'Yekambi L T - 1 Awc', code: '27524040718', type: 'Regular', sectorId: 26569, latitude: 18.155384, longitude: 76.311446, lgdCode: 560691, areaType: 'Rural', village: 'YEKAMBI LAMAN TANDA', block: 'AUSA', gpName: 'EKAMBI TANDA' },
  { id: 197, awcId: 725088, name: 'Yekambi L T - 2 Awc', code: '27524040719', type: 'Regular', sectorId: 26569, latitude: 18.155127, longitude: 76.31108, lgdCode: 560691, areaType: 'Rural', village: 'YEKAMBI LAMAN TANDA', block: 'AUSA', gpName: 'EKAMBI TANDA' },
  { id: 198, awcId: 725090, name: 'Yekambi L T - 3 Awc', code: '27524040720', type: 'Regular', sectorId: 26569, latitude: 18.156862, longitude: 76.309994, lgdCode: 560691, areaType: 'Rural', village: 'YEKAMBI LAMAN TANDA', block: 'AUSA', gpName: 'EKAMBI TANDA' }
];

export default function Centers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCenters = allCenters.filter(center =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.gpName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to generate Google Maps link
  const getMapsLink = (lat, lng) => {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h3" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold', 
          color: '#1a237e', 
          textAlign: 'center',
          mb: 4,
          fontFamily: 'Arial Unicode MS'
        }}
      >
        आमची केंद्रे
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        label="केंद्र शोधा (नाव, गाव किंवा ग्रामपंचायत)"
        sx={{ 
          mb: 4,
          borderRadius: 4,
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          }
        }}
        InputProps={{
          startAdornment: <LocationOn color="action" sx={{ mr: 1 }} />
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search centers"
      />

      <Box sx={{ 
        backgroundColor: '#f8f9fa', 
        borderRadius: 2,
        p: 3,
        boxShadow: 1
      }}>
        <Typography variant="subtitle1" sx={{ mb: 2, color: '#616161' }}>
          एकूण केंद्रे: {allCenters.length} | सध्या दाखवत आहे: {filteredCenters.length}
        </Typography>

        <Grid container spacing={3}>
          {filteredCenters.map((center) => (
            <Grid item xs={12} sm={6} md={4} key={center.id}>
              <Paper 
                elevation={2} 
                sx={{ 
                  p: 2,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 3
                  }
                }}
              >
                <List>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemText
                      primary={
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 'bold',
                            color: '#1a237e',
                            fontSize: '1.2rem'
                          }}
                        >
                          {center.name}
                        </Typography>
                      }
                      secondary={
                        <>
                          <Divider sx={{ my: 1 }} />
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Home fontSize="small" sx={{ mr: 1, color: '#616161' }} />
                            <Typography variant="body2">
                              {center.village}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Public fontSize="small" sx={{ mr: 1, color: '#616161' }} />
                            <Typography variant="body2">
                              {center.gpName}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <PinDrop fontSize="small" sx={{ mr: 1, color: '#616161' }} />
                            <Link
                              href={getMapsLink(center.latitude, center.longitude)}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:hover': {
                                  color: '#1976d2',
                                  textDecoration: 'underline'
                                }
                              }}
                            >
                              {center.latitude}, {center.longitude}
                              <OpenInNew fontSize="small" sx={{ ml: 0.5 }} />
                            </Link>
                          </Box>
                          
                          <Box sx={{ mt: 1 }}>
                            <Chip 
                              label={center.type} 
                              size="small" 
                              sx={{ mr: 1 }} 
                              color="primary"
                            />
                            <Chip 
                              label={center.areaType} 
                              size="small" 
                              color="secondary"
                            />
                          </Box>
                          
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            sx={{ display: 'block', mt: 1 }}
                          >
                            AWC ID: {center.awcId} | Code: {center.code}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {filteredCenters.length === 0 && (
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              py: 4, 
              color: '#757575',
              fontStyle: 'italic'
            }}
          >
            कोणतेही केंद्र सापडले नाही
          </Typography>
        )}
      </Box>
    </Container>
  );
}