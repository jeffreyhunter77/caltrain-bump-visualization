var stations = [
    "San Francisco",
    "22nd Street",
    "Bayshore",
    "So. San Francisco",
    "San Bruno",
    "Millbrae",
    "Burlingame",
    "San Mateo",
    "Hayward Park",
    "Hillsdale",
    "Belmont",
    "San Carlos",
    "Redwood City",
    "Menlo Park",
    "Palo Alto",
    "California Ave",
    "San Antonio",
    "Mountain View",
    "Sunnyvale",
    "Lawrence",
    "Santa Clara",
    "College Park",
    "San Jose",
    "Tamien",
    "Capitol",
    "Blossom Hill",
    "Morgan Hill",
    "San Martin",
    "Gilroy"
]
;

var sbTrains = [
    "102",
    "104",
    "206",
    "208",
    "210",
    "312",
    "314",
    "216",
    "218",
    "220",
    "322",
    "324",
    "226",
    "228",
    "230",
    "332",
    "134",
    "236",
    "138",
    "142",
    "146",
    "150",
    "152",
    "254",
    "156",
    "258",
    "360",
    "262",
    "264",
    "366",
    "268",
    "370",
    "272",
    "274",
    "376",
    "278",
    "380",
    "282",
    "284",
    "386",
    "288",
    "190",
    "192",
    "194",
    "196",
    "198"
]
;

var nbTrains = [
    "101",
    "103",
    "305",
    "207",
    "309",
    "211",
    "313",
    "215",
    "217",
    "319",
    "221",
    "323",
    "225",
    "227",
    "329",
    "231",
    "233",
    "135",
    "237",
    "139",
    "143",
    "147",
    "151",
    "155",
    "257",
    "159",
    "261",
    "263",
    "365",
    "267",
    "269",
    "371",
    "273",
    "375",
    "277",
    "279",
    "381",
    "283",
    "385",
    "287",
    "289",
    "191",
    "193",
    "195",
    "197",
    "199"
]
;

var sbTimes = [
  ["4:55", "5:00", "5:05", "5:11", "5:15", "5:19", "5:23", "5:28", "5:31", "5:34", "5:37", "5:40", "5:45", "5:50", "5:53", "5:57", "6:01", "6:05", "6:10", "6:14", "6:19", "-", "6:28", "-", false, false, false, false, false],
  ["5:25", "5:30", "5:35", "5:41", "5:45", "5:49", "5:53", "5:58", "6:01", "6:04", "6:07", "6:10", "6:15", "6:20", "6:23", "6:27", "6:31", "6:35", "6:40", "6:44", "6:49", "-", "6:58", "7:05", false, false, false, false, false],
  ["6:11", "6:16", "-", "-", "-", "6:29", "6:33", "6:38", "-", "6:42", "-", "6:46", "6:51", "6:56", "6:59", "7:03", "-", "7:09", "-", "7:14", "-", "-", "7:26", "-", false, false, false, false, false],
  ["6:24", "6:29", "6:34", "6:40", "6:44", "6:48", "6:52", "6:57", "7:00", "7:03", "7:06", "7:09", "7:14", "-", "7:20", "-", "-", "-", "-", "-", "7:36", "-", "7:45", "7:52", false, false, false, false, false],
  ["6:44", "6:49", "-", "-", "-", "7:01", "-", "7:09", "-", "-", "-", "7:15", "7:20", "7:25", "7:28", "7:32", "7:36", "7:40", "7:45", "7:51+", "7:58+", "8:01+", "8:08", "8:15", false, false, false, false, false],
  ["6:57", "7:02", "-", "-", "-", "7:15", "-", "-", "-", "-", "-", "-", "7:30", "7:35", "7:38", "-", "-", "7:46", "-", "-", "-", "-", "8:00", "-", false, false, false, false, false],
  ["7:14", "7:19", "-", "-", "-", "7:32", "-", "-", "-", "7:42", "-", "-", "-", "-", "7:53", "-", "-", "8:00", "-", "-", "-", "-", "8:15", "-", false, false, false, false, false],
  ["7:19", "7:24", "-", "-", "7:35", "-", "7:40", "7:46", "-", "7:50", "-", "7:54", "-", "8:02", "8:05", "-", "-", "8:13", "-", "8:20", "-", "-", "8:32", "-", false, false, false, false, false],
  ["7:24", "7:29", "7:34", "7:40", "7:44", "7:48", "7:52", "7:57", "8:00", "8:03", "8:06", "8:09", "8:14", "-", "8:20", "-", "-", "-", "-", "-", "8:36", "-", "8:45", "8:52", false, false, false, false, false],
  ["7:44", "7:49", "-", "-", "-", "8:01", "-", "8:09", "-", "-", "-", "8:15", "8:20", "8:25", "8:28", "8:32", "8:36", "8:40", "8:45", "8:51+", "8:58+", "-", "9:07", "9:14", false, false, false, false, false],
  ["7:57", "8:02", "-", "-", "-", "8:15", "-", "-", "-", "-", "-", "-", "8:30", "8:35", "8:38", "-", "-", "8:46", "-", "-", "-", "-", "9:00", "-", false, false, false, false, false],
  ["8:14", "8:19", "-", "-", "-", "8:32", "-", "-", "-", "8:42", "-", "-", "-", "-", "8:53", "-", "-", "9:00", "-", "-", "-", "-", "9:15", "-", false, false, false, false, false],
  ["8:19", "8:24", "-", "-", "8:35", "-", "8:40", "8:46", "-", "8:50", "-", "8:54", "-", "9:02", "9:05", "-", "-", "9:13", "-", "9:20", "-", "-", "9:32", "-", false, false, false, false, false],
  ["8:24", "8:29", "8:34", "8:40", "8:44", "8:48", "8:52", "8:57", "9:00", "9:03", "9:06", "9:09", "9:14", "-", "9:20", "-", "-", "-", "-", "-", "9:36", "-", "9:45", "9:52", false, false, false, false, false],
  ["8:44", "8:49", "-", "-", "-", "9:01", "-", "9:09", "-", "-", "-", "9:15", "9:20", "9:25", "9:28", "9:32", "9:36", "9:40", "9:45", "9:51+", "9:58+", "-", "10:07", "10:14", false, false, false, false, false],
  ["8:57", "9:02", "-", "-", "-", "9:15", "-", "-", "-", "-", "-", "-", "9:30", "9:35", "9:38", "-", "-", "9:46", "-", "-", "-", "-", "10:00", "-", false, false, false, false, false],
  ["9:07", "9:12", "9:17", "9:23", "9:27", "9:31", "9:35", "9:40", "9:43", "9:46", "9:49", "9:52", "9:57", "10:02", "10:05", "10:09", "10:13", "10:17", "10:22", "10:26", "10:31", "-", "10:40", "-", false, false, false, false, false],
  ["9:37", "-", "-", "-", "9:51", "9:55", "9:59", "10:04", "-", "10:08", "10:11", "10:14", "10:19", "10:24", "10:27", "10:31", "10:35", "10:39", "10:44", "10:48", "10:53", "-", "11:02", "11:09", false, false, false, false, false],
  ["10:07", "10:12", "10:17", "10:23", "10:27", "10:31", "10:35", "10:40", "10:43", "10:46", "10:49", "10:52", "10:57", "11:02", "11:05", "11:09", "11:13", "11:17", "11:22", "11:26", "11:31", "-", "11:40", "-", false, false, false, false, false],
  ["11:07", "11:12", "11:17", "11:23", "11:27", "11:31", "11:35", "11:40", "11:43", "11:46", "11:49", "11:52", "11:57", "12:02", "12:05", "12:09", "12:13", "12:17", "12:22", "12:26", "12:31", "-", "12:40", "-", false, false, false, false, false],
  ["12:07", "12:12", "12:17", "12:23", "12:27", "12:31", "12:35", "12:40", "12:43", "12:46", "12:49", "12:52", "12:57", "1:02", "1:05", "1:09", "1:13", "1:17", "1:22", "1:26", "1:31", "-", "1:40", "-", false, false, false, false, false],
  ["1:07", "1:12", "1:17", "1:23", "1:27", "1:31", "1:35", "1:40", "1:43", "1:46", "1:49", "1:52", "1:57", "2:02", "2:05", "2:09", "2:13", "2:17", "2:22", "2:26", "2:31", "-", "2:40", "-", false, false, false, false, false],
  ["2:07", "2:12", "2:17", "2:23", "2:27", "2:31", "2:35", "2:40", "2:43", "2:46", "2:49", "2:52", "2:57", "3:02", "3:05", "3:09", "3:13", "3:17", "3:22", "3:26", "3:31", "-", "3:40", "-", false, false, false, false, false],
  ["2:37", "-", "-", "-", "2:51", "2:55", "2:59", "3:04", "-", "3:08", "3:11", "3:14", "3:19", "3:24", "3:27", "3:31", "3:35", "3:39", "3:44", "3:48", "3:53", "-", "4:02", "4:09", false, false, false, false, false],
  ["3:07", "3:12", "3:17", "3:23", "3:27", "3:31", "3:35", "3:40", "3:43", "3:46", "3:49", "3:52", "3:57", "4:02", "4:05", "4:09", "4:13", "4:17", "4:22", "4:26", "4:31", "4:34", "4:41", "4:47", "4:54", "5:00", "5:13", "5:19", "5:32"],
  ["3:37", "-", "-", "-", "3:51", "3:55", "3:59", "4:04", "-", "4:08", "4:11", "4:14", "4:19", "4:24", "4:27", "4:31", "4:35", "4:39", "4:44", "4:48", "4:53", "-", "5:02", "5:09", false, false, false, false, false],
  ["4:09", "-", "-", "-", "-", "4:25", "-", "-", "-", "4:35", "-", "-", "-", "-", "4:46", "-", "-", "4:53", "-", "-", "-", "-", "5:08", "-", false, false, false, false, false],
  ["4:19", "-", "-", "-", "4:33", "-", "4:38", "4:44", "-", "4:49", "-", "4:53", "-", "-", "5:03", "5:07", "-", "5:13", "5:18", "-", "-", "-", "5:29", "-", false, false, false, false, false],
  ["4:27", "4:32", "4:40", "4:48", "4:52", "4:56", "5:00", "5:06", "5:09", "5:13", "5:16", "5:20", "5:24", "5:30", "-", "-", "-", "5:38", "5:43", "-", "5:51", "-", "5:59", "-", false, false, false, false, false],
  ["4:33", "-", "-", "-", "-", "4:49", "-", "4:59", "-", "-", "-", "-", "5:08", "-", "5:14", "-", "-", "-", "5:23", "-", "-", "-", "5:34", "5:41", false, false, false, false, false],
  ["4:56", "-", "-", "5:08", "-", "5:14", "-", "-", "-", "5:24", "-", "-", "5:30", "5:36", "5:40", "5:44", "5:48", "5:52", "5:57", "6:03+", "6:10+", "-", "6:18", "6:24", "6:31", "6:37", "6:50", "6:56", "7:09"],
  ["5:14", "-", "-", "-", "-", "5:30", "-", "-", "-", "5:40", "-", "-", "-", "-", "5:51", "-", "-", "5:58", "-", "-", "-", "-", "6:13", "-", false, false, false, false, false],
  ["5:20", "-", "-", "-", "5:34", "-", "5:39", "5:45", "-", "5:50", "-", "5:54", "-", "-", "6:04", "6:08", "-", "6:14", "6:19", "-", "-", "-", "6:30", "-", false, false, false, false, false],
  ["5:27", "5:32", "5:40", "5:48", "5:52", "5:56", "6:00", "6:06", "6:09", "6:13", "6:16", "6:20", "6:24", "6:30", "-", "-", "-", "6:38", "6:43", "6:47", "6:52", "-", "7:00", "7:06", "7:13", "7:19", "7:32", "7:38", "7:51"],
  ["5:33", "-", "-", "-", "-", "5:49", "-", "5:59", "-", "-", "-", "-", "6:08", "-", "6:14", "-", "-", "-", "6:24", "-", "-", "-", "6:35", "6:42", false, false, false, false, false],
  ["5:56", "-", "-", "6:08", "-", "6:14", "-", "-", "-", "6:24", "-", "-", "6:30", "6:36", "6:40", "6:44", "6:48", "6:52", "6:57", "7:03+", "7:10+", "-", "7:18", "7:25", false, false, false, false, false],
  ["6:14", "-", "-", "-", "-", "6:30", "-", "-", "-", "6:40", "-", "-", "-", "-", "6:51", "-", "-", "6:58", "-", "-", "-", "-", "7:13", "-", false, false, false, false, false],
  ["6:20", "-", "-", "-", "6:34", "-", "6:39", "6:45", "-", "6:50", "-", "6:54", "-", "-", "7:04", "7:08", "-", "7:14", "7:19", "-", "-", "-", "7:30", "-", false, false, false, false, false],
  ["6:27", "6:32", "6:40", "6:48", "6:52", "6:56", "7:00", "7:06", "7:09", "7:13", "7:16", "7:20", "7:24", "7:30", "-", "-", "-", "7:38", "7:43", "-", "7:51", "-", "7:59", "-", false, false, false, false, false],
  ["6:33", "-", "-", "-", "-", "6:49", "-", "6:59", "-", "-", "-", "-", "7:08", "-", "7:14", "-", "-", "-", "7:23", "-", "-", "-", "7:34", "7:41", false, false, false, false, false],
  ["6:56", "-", "-", "7:08", "-", "7:14", "-", "-", "-", "7:24", "-", "-", "7:30", "7:36", "7:40", "7:44", "7:48", "7:52", "7:57", "8:01", "8:06", "-", "8:14", "8:21", false, false, false, false, false],
  ["7:30", "7:35", "7:40", "7:46", "7:50", "7:54", "7:58", "8:03", "8:06", "8:09", "8:12", "8:15", "8:20", "8:25", "8:28", "8:32", "8:36", "8:40", "8:45", "8:49", "8:54", "-", "9:03", "-", false, false, false, false, false],
  ["8:40", "8:45", "8:50", "8:56", "9:00", "9:04", "9:08", "9:13", "9:16", "9:19", "9:22", "9:25", "9:30", "9:35", "9:38", "9:42", "9:46", "9:50", "9:55", "9:59", "10:04", "-", "10:13", "10:20", false, false, false, false, false],
  ["9:40", "9:45", "9:50", "9:56", "10:00", "10:04", "10:08", "10:13", "10:16", "10:19", "10:22", "10:25", "10:30", "10:35", "10:38", "10:42", "10:46", "10:50", "10:55", "10:59", "11:04", "-", "11:13", "11:20", false, false, false, false, false],
  ["10:40", "10:45", "10:50", "10:56", "11:00", "11:04", "11:08", "11:13", "11:16", "11:19", "11:22", "11:25", "11:30", "11:35", "11:38", "11:42", "11:46", "11:50", "11:55", "11:59", "12:04", "-", "12:13", "-", false, false, false, false, false],
  ["12:01", "12:06", "12:11", "12:17", "12:21", "12:25", "12:29", "12:34", "12:37", "12:40", "12:43", "12:46", "12:51", "12:56", "12:59", "1:03", "1:07", "1:11", "1:16", "1:20", "1:25", "-", "1:34", "-", false, false, false, false, false]
]
;

var nbTimes = [
  ["6:03", "5:54", "5:49", "5:43", "5:39", "5:35", "5:30", "5:25", "5:22", "5:19", "5:16", "5:13", "5:09", "5:04", "5:01", "4:57", "4:53", "4:49", "4:44", "4:40", "4:35", "-", "4:30", "-", false, false, false, false, false],
  ["6:38", "6:29", "6:24", "6:18", "6:14", "6:10", "6:05", "6:00", "5:57", "5:54", "5:51", "5:48", "5:44", "5:39", "5:36", "5:32", "5:28", "5:24", "5:19", "5:15", "5:10", "-", "5:05", "4:58", false, false, false, false, false],
  ["6:44", "-", "-", "-", "-", "6:26", "-", "-", "-", "6:16", "-", "-", "-", "-", "6:05", "-", "-", "5:57", "-", "-", "-", "-", "5:45", "-", false, false, false, false, false],
  ["7:21", "-", "-", "7:07", "-", "7:01", "-", "-", "-", "6:51", "-", "-", "6:45", "6:39", "6:36", "6:31", "6:27", "6:23", "6:18", "6:12", "6:02", "-", "5:57", "5:50", false, false, false, false, false],
  ["7:04", "-", "-", "-", "-", "6:47", "-", "6:39", "-", "-", "-", "-", "6:30", "-", "6:23", "-", "-", "-", "6:13", "-", "-", "-", "6:03", "5:56", false, false, false, false, false],
  ["7:50", "7:42+", "7:35+", "7:27", "7:23", "7:19", "7:13", "7:08", "7:05", "7:02", "6:58", "6:55", "6:51", "6:45", "-", "-", "-", "6:37", "6:32", "-", "6:25", "-", "6:20", "-", false, false, false, false, false],
  ["7:44", "-", "-", "-", "-", "7:26", "-", "-", "-", "7:16", "-", "-", "-", "-", "7:05", "-", "-", "6:57", "-", "-", "-", "-", "6:45", "-", false, false, false, false, false],
  ["7:59", "-", "-", "-", "7:44", "-", "7:37", "7:32", "-", "7:28", "-", "7:24", "-", "-", "7:16", "7:11", "-", "7:05", "7:00", "-", "-", "-", "6:50", "-", false, false, false, false, false],
  ["8:21", "-", "-", "8:07", "-", "8:01", "-", "-", "-", "7:51", "-", "-", "7:45", "7:39", "7:36", "7:31", "7:27", "7:23", "7:18", "7:12", "7:02", "-", "6:57", "6:49", "6:41", "6:35", "6:22", "6:16", "6:07"],
  ["8:04", "-", "-", "-", "-", "7:47", "-", "7:39", "-", "-", "-", "-", "7:30", "-", "7:23", "-", "-", "-", "7:13", "-", "-", "-", "7:03", "6:56", false, false, false, false, false],
  ["8:50", "8:42+", "8:35+", "8:27", "8:23", "8:19", "8:13", "8:08", "8:05", "8:02", "7:58", "7:55", "7:51", "7:45", "-", "-", "-", "7:37", "7:32", "7:28", "7:23", "-", "7:18", "7:10", "7:02", "6:56", "6:43", "6:37", "6:28"],
  ["8:44", "-", "-", "-", "-", "8:26", "-", "-", "-", "8:16", "-", "-", "-", "-", "8:05", "-", "-", "7:57", "-", "-", "-", "-", "7:45", "-", false, false, false, false, false],
  ["8:59", "-", "-", "-", "8:44", "-", "8:37", "8:32", "-", "8:28", "-", "8:24", "-", "-", "8:16", "8:11", "-", "8:05", "8:00", "-", "-", "-", "7:50", "-", false, false, false, false, false],
  ["9:21", "-", "-", "9:07", "-", "9:01", "-", "-", "-", "8:51", "-", "-", "8:45", "8:39", "8:36", "8:31", "8:27", "8:23", "8:18", "8:12", "8:02", "7:58", "7:55", "7:47", "7:39", "7:33", "7:20", "7:14", "7:05"],
  ["9:07", "-", "-", "-", "-", "8:50", "-", "8:42", "-", "-", "-", "-", "8:33", "-", "8:25", "-", "-", "-", "8:14", "-", "-", "-", "8:03", "7:56", false, false, false, false, false],
  ["9:47", "9:39", "9:33", "9:27", "9:23", "9:19", "9:13", "9:08", "9:05", "9:02", "8:58", "8:55", "8:51", "8:45", "-", "-", "-", "8:37", "8:32", "-", "8:25", "-", "8:20", "-", false, false, false, false, false],
  ["10:08", "-", "-", "-", "9:51", "9:47", "9:42", "9:37", "-", "9:33", "9:30", "9:27", "9:23", "9:17", "9:14", "9:08", "9:04", "9:00", "8:54", "8:50", "8:45", "-", "8:40", "8:33", false, false, false, false, false],
  ["10:48", "10:39", "10:34", "10:28", "10:24", "10:20", "10:15", "10:10", "10:07", "10:04", "10:01", "9:58", "9:54", "9:49", "9:46", "9:42", "9:38", "9:34", "9:29", "9:25", "9:20", "-", "9:15", "-", false, false, false, false, false],
  ["11:14", "-", "-", "-", "10:57", "10:53", "10:48", "10:43", "-", "10:39", "10:36", "10:33", "10:29", "10:24", "10:21", "10:17", "10:13", "10:09", "10:04", "10:00", "9:55", "-", "9:50", "9:43", false, false, false, false, false],
  ["11:48", "11:39", "11:34", "11:28", "11:24", "11:20", "11:15", "11:10", "11:07", "11:04", "11:01", "10:58", "10:54", "10:49", "10:46", "10:42", "10:38", "10:34", "10:29", "10:25", "10:20", "-", "10:15", "-", false, false, false, false, false],
  ["12:43", "12:34", "12:29", "12:23", "12:19", "12:15", "12:10", "12:05", "12:02", "11:59", "11:56", "11:53", "11:49", "11:44", "11:41", "11:37", "11:33", "11:29", "11:24", "11:20", "11:15", "-", "11:10", "-", false, false, false, false, false],
  ["1:43", "1:34", "1:29", "1:23", "1:19", "1:15", "1:10", "1:05", "1:02", "12:59", "12:56", "12:53", "12:49", "12:44", "12:41", "12:37", "12:33", "12:29", "12:24", "12:20", "12:15", "-", "12:10", "-", false, false, false, false, false],
  ["2:43", "2:34", "2:29", "2:23", "2:19", "2:15", "2:10", "2:05", "2:02", "1:59", "1:56", "1:53", "1:49", "1:44", "1:41", "1:37", "1:33", "1:29", "1:24", "1:20", "1:15", "-", "1:10", "-", false, false, false, false, false],
  ["3:48", "3:39", "3:34", "3:28", "3:24", "3:20", "3:15", "3:10", "3:07", "3:04", "3:01", "2:58", "2:54", "2:49", "2:46", "2:42", "2:38", "2:34", "2:29", "2:25", "2:20", "-", "2:15", "-", false, false, false, false, false],
  ["4:04", "-", "-", "-", "3:47", "3:43", "3:38", "3:33", "-", "3:29", "3:26", "3:23", "3:19", "3:14", "3:11", "3:07", "3:03", "2:59", "2:54", "2:50", "2:45", "-", "2:40", "2:33", false, false, false, false, false],
  ["4:40", "4:31", "4:26", "4:20", "4:16", "4:12", "4:07", "4:02", "3:59", "3:56", "3:53", "3:50", "3:46", "3:41", "3:38", "3:34", "3:30", "3:26", "3:21", "3:17", "3:12", "3:08", "3:05", "-", false, false, false, false, false],
  ["5:05", "4:57", "-", "-", "-", "4:45", "-", "4:36", "-", "-", "-", "4:29", "4:25", "4:19", "4:16", "4:11", "4:07", "4:03", "3:58", "3:54", "3:49", "-", "3:44", "3:37", false, false, false, false, false],
  ["5:31", "5:23+", "5:15+", "5:07", "5:03", "4:59", "4:53", "4:48", "4:45", "4:42", "4:38", "4:35", "4:31", "-", "4:24", "-", "-", "-", "-", "-", "4:10", "-", "4:05", "3:58", false, false, false, false, false],
  ["5:26", "5:19", "-", "-", "-", "5:07", "-", "-", "-", "-", "-", "-", "4:52", "4:46", "4:43", "-", "-", "4:35", "-", "-", "-", "-", "4:23", "-", false, false, false, false, false],
  ["5:43", "5:35", "-", "-", "5:24", "-", "5:17", "5:12", "-", "5:08", "-", "5:04", "-", "4:57", "4:54", "-", "-", "4:46", "-", "4:39", "-", "-", "4:31", "-", false, false, false, false, false],
  ["6:04", "5:57", "-", "-", "-", "5:45", "-", "5:36", "-", "-", "-", "5:29", "5:25", "5:19", "5:16", "5:11", "5:07", "5:03", "4:58", "4:52", "4:44", "-", "4:39", "4:32", false, false, false, false, false],
  ["5:46", "5:39", "-", "-", "-", "5:27", "-", "-", "-", "5:17", "-", "-", "-", "-", "5:06", "-", "-", "4:58", "-", "-", "-", "-", "4:45", "-", false, false, false, false, false],
  ["6:33", "6:25+", "6:17+", "6:09", "6:05", "6:01", "5:55", "5:50", "5:47", "5:44", "5:40", "5:37", "5:33", "-", "5:26", "-", "-", "-", "-", "-", "5:11", "-", "5:06", "4:59", false, false, false, false, false],
  ["6:28", "6:21", "-", "-", "-", "6:09", "-", "-", "-", "-", "-", "-", "5:53", "5:47", "5:44", "-", "-", "5:35", "-", "-", "-", "-", "5:23", "-", false, false, false, false, false],
  ["6:43", "6:35", "-", "-", "6:24", "-", "6:17", "6:12", "-", "6:08", "-", "6:04", "-", "5:57", "5:54", "-", "-", "5:46", "-", "5:39", "-", "-", "5:31", "-", false, false, false, false, false],
  ["7:04", "6:57", "-", "-", "-", "6:45", "-", "6:36", "-", "-", "-", "6:29", "6:25", "6:19", "6:16", "6:11", "6:07", "6:03", "5:58", "5:52", "5:44", "-", "5:39", "5:32", false, false, false, false, false],
  ["6:47", "6:40", "-", "-", "-", "6:28", "-", "-", "-", "6:17", "-", "-", "-", "-", "6:06", "-", "-", "5:58", "-", "-", "-", "-", "5:45", "-", false, false, false, false, false],
  ["7:31", "7:23+", "7:15+", "7:07", "7:03", "6:59", "6:53", "6:48", "6:45", "6:42", "6:38", "6:35", "6:31", "-", "6:24", "-", "-", "-", "-", "-", "6:10", "-", "6:05", "5:58", false, false, false, false, false],
  ["7:26", "7:19", "-", "-", "-", "7:07", "-", "-", "-", "-", "-", "-", "6:52", "6:46", "6:43", "-", "-", "6:35", "-", "-", "-", "-", "6:23", "-", false, false, false, false, false],
  ["7:43", "7:35", "-", "-", "7:24", "-", "7:17", "7:12", "-", "7:08", "-", "7:04", "-", "6:57", "6:54", "-", "-", "6:46", "-", "6:39", "-", "-", "6:31", "6:24", false, false, false, false, false],
  ["8:02", "7:55", "-", "-", "-", "7:43", "7:37", "7:32", "-", "7:28", "-", "7:23", "7:19", "7:13", "7:10", "7:06", "-", "7:00", "-", "6:53", "-", "-", "6:45", "-", false, false, false, false, false],
  ["8:23", "8:14", "8:09", "8:03", "7:59", "7:55", "7:50", "7:45", "7:42", "7:39", "7:36", "7:33", "7:29", "7:24", "7:21", "7:17", "7:13", "7:09", "7:04", "7:00", "6:55", "-", "6:50", "-", false, false, false, false, false],
  ["9:03", "8:54", "8:49", "8:43", "8:39", "8:35", "8:30", "8:25", "8:22", "8:19", "8:16", "8:13", "8:09", "8:04", "8:01", "7:57", "7:53", "7:49", "7:44", "7:40", "7:35", "-", "7:30", "-", false, false, false, false, false],
  ["10:03", "9:54", "9:49", "9:43", "9:39", "9:35", "9:30", "9:25", "9:22", "9:19", "9:16", "9:13", "9:09", "9:04", "9:01", "8:57", "8:53", "8:49", "8:44", "8:40", "8:35", "-", "8:30", "8:23", false, false, false, false, false],
  ["11:03", "10:54", "10:49", "10:43", "10:39", "10:35", "10:30", "10:25", "10:22", "10:19", "10:16", "10:13", "10:09", "10:04", "10:01", "9:57", "9:53", "9:49", "9:44", "9:40", "9:35", "-", "9:30", "9:23", false, false, false, false, false],
  ["12:03", "11:54", "11:49", "11:43", "11:39", "11:35", "11:30", "11:25", "11:22", "11:19", "11:16", "11:13", "11:09", "11:04", "11:01", "10:57", "10:53", "10:49", "10:44", "10:40", "10:35", "-", "10:30", "-", false, false, false, false, false]
]
;
