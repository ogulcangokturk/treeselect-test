import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Treeselect from "treeselectjs";
import React from "react";
import "treeselectjs/dist/treeselectjs.css";

export default function Home() {
  const cancerTree = {
    data: { id: 0, en: "All Cancers", jp: "全てのがん", kana: "すべてのがん" },
    children: [
      {
        data: {
          id: 1,
          en: "Adrenocortical Carcinoma",
          jp: "副腎皮質がん",
          kana: "ふくしんひしつがん",
        },
        children: [],
      },
      {
        data: {
          id: 2,
          en: "Anal Cancer",
          jp: "肛門がん",
          kana: "こうもんがん",
        },
        children: [],
      },
      {
        data: {
          id: 300,
          en: "Biliary tract cancer",
          jp: "胆道がん",
          kana: "たんどうがん",
        },
        children: [
          {
            data: {
              id: 3,
              en: "Bile Duct Cancer",
              jp: "胆管がん",
              kana: "たんかんがん",
            },
            children: [
              {
                data: {
                  id: 301,
                  en: "Intrahepatic cholangiocarcinoma",
                  jp: "肝内胆管がん",
                  kana: "かんないたんかんがん",
                },
                children: [],
              },
              {
                data: {
                  id: 302,
                  en: "Extrahepatic cholangiocarcinoma",
                  jp: "肝外胆管がん",
                  kana: "かんがいたんかんがん",
                },
                children: [],
              },
              {
                data: {
                  id: 304,
                  en: "Ampullary carcinoma",
                  jp: "膨大部がん",
                  kana: "ぼうだいぶがん",
                },
                children: [],
              },
            ],
          },
          {
            data: {
              id: 14,
              en: "Gallbladder Cancer",
              jp: "胆嚢がん",
              kana: "たんのうがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 340,
          en: "Bladder/Urinary Tract Cancer",
          jp: "膀胱・尿路がん",
          kana: "ぼうこう・にょうろがん",
        },
        children: [
          {
            data: {
              id: 4,
              en: "Bladder Cancer",
              jp: "膀胱がん",
              kana: "ぼうこうがん",
            },
            children: [],
          },
          {
            data: {
              id: 341,
              en: "Urinary Tract Cancer",
              jp: "尿路がん",
              kana: "にょうろがん",
            },
            children: [
              {
                data: {
                  id: 34,
                  en: "Ureter/Renal Pelvis Cancer",
                  jp: "尿管・腎盂がん",
                  kana: "にょうかん・じんうがん",
                },
                children: [],
              },
              {
                data: {
                  id: 342,
                  en: "Urethral Cancer",
                  jp: "尿道がん",
                  kana: "にょうどうがん",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        data: {
          id: 343,
          en: "Urothelial cancer",
          jp: "尿路上皮がん",
          kana: "にょうろじょうひがん",
        },
        children: [],
      },
      {
        data: {
          id: 26,
          en: "Kidney Cancer",
          jp: "腎臓がん",
          kana: "じんぞうがん",
        },
        children: [],
      },
      {
        data: { id: 5, en: "Bone Cancer", jp: "骨腫瘍", kana: "こつしゅよう" },
        children: [],
      },
      {
        data: {
          id: 4102,
          en: "Central Nervous System/Brain Tumors",
          jp: "中枢神経系・脳腫瘍",
          kana: "ちゅうすうしんけいけい・のうしゅよう",
        },
        children: [
          {
            data: {
              id: 6,
              en: "Brain Tumors",
              jp: "脳腫瘍",
              kana: "のうしゅよう",
            },
            children: [
              {
                data: {
                  id: 15,
                  en: "Glioma",
                  jp: "神経膠腫",
                  kana: "しんけいこうしゅ",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        data: { id: 7, en: "Breast Cancer", jp: "乳がん", kana: "にゅうがん" },
        children: [
          {
            data: {
              id: 701,
              en: "HER2-positive Breast Cancer",
              jp: "HER2陽性乳がん",
              kana: "HER2ようせいにゅうがん",
            },
            children: [],
          },
          {
            data: {
              id: 702,
              en: "HR-positive Breast Cancer",
              jp: "ホルモン受容体陽性乳がん",
              kana: "ほるもんじゅようたいようせいにゅうがん",
            },
            children: [],
          },
          {
            data: {
              id: 703,
              en: "Triple-negative Breast Cancer",
              jp: "トリプルネガティブ乳がん",
              kana: "とりぷるねがてぃぶにゅうがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 8,
          en: "Bronchial Tumors",
          jp: "気管支がん",
          kana: "きかんしがん",
        },
        children: [],
      },
      {
        data: {
          id: 11,
          en: "Colorectal Cancer",
          jp: "結腸直腸がん（大腸がん）",
          kana: "けっちょうちょくちょうがん（だいちょうがん）",
        },
        children: [
          {
            data: {
              id: 1101,
              en: "Colon Cancer",
              jp: "結腸がん",
              kana: "けっちょうがん",
            },
            children: [],
          },
          {
            data: {
              id: 1102,
              en: "Rectal Cancer",
              jp: "直腸がん",
              kana: "ちょくちょうがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 29,
          en: "Small Intestine Cancer",
          jp: "小腸がん",
          kana: "しょうちょうがん",
        },
        children: [],
      },
      {
        data: {
          id: 50,
          en: "Appendix Cancer",
          jp: "虫垂がん",
          kana: "ちゅうじがん",
        },
        children: [],
      },
      {
        data: {
          id: 1230,
          en: "Esophagus/Stomach Cancer",
          jp: "食道・胃がん",
          kana: "しょくどう・いがん",
        },
        children: [
          {
            data: {
              id: 12,
              en: "Esophageal Cancer",
              jp: "食道がん",
              kana: "しょくどうがん",
            },
            children: [],
          },
          {
            data: {
              id: 30,
              en: "Stomach Cancer",
              jp: "胃がん",
              kana: "いがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 16,
          en: "Head and Neck Cancer",
          jp: "頭頸部がん",
          kana: "とうけいぶがん",
        },
        children: [
          {
            data: {
              id: 1601,
              en: "Head and Neck Squamous Cell Carcinoma",
              jp: "頭頚部扁平上皮がん",
              kana: "とうけいぶへんぺいじょうひがん",
            },
            children: [],
          },
          {
            data: {
              id: 1602,
              en: "Head and Neck Non-Squamous Cell Carcinoma",
              jp: "頭頚部非扁平上皮がん",
              kana: "とうけいぶひへんぺいじょうひがん",
            },
            children: [],
          },
          {
            data: {
              id: 1603,
              en: "Salivary Gland Cancer",
              jp: "唾液腺がん",
              kana: "だえきせんがん",
            },
            children: [],
          },
        ],
      },
      {
        data: { id: 13, en: "Eye Cancer", jp: "眼がん", kana: "がんがん" },
        children: [],
      },
      {
        data: { id: 18, en: "Liver Cancer", jp: "肝がん", kana: "かんがん" },
        children: [
          {
            data: {
              id: 1801,
              en: "Hepatocellular carcinoma",
              jp: "肝細胞がん",
              kana: "かんさいぼうがん",
            },
            children: [],
          },
        ],
      },
      {
        data: { id: 19, en: "Lung Cancer", jp: "肺がん", kana: "はいがん" },
        children: [
          {
            data: {
              id: 1901,
              en: "Small Cell Lung Cancer",
              jp: "小細胞肺がん",
              kana: "しょさいぼうはいがん",
            },
            children: [],
          },
          {
            data: {
              id: 1902,
              en: "Non-Small Cell Lung Cancer, NSCLC",
              jp: "非小細胞肺がん",
              kana: "ひしょさいぼうはいがん",
            },
            children: [
              {
                data: {
                  id: 1903,
                  en: "Squamous Non-Small Cell Lung Cancer",
                  jp: "扁平上皮非小細胞肺がん",
                  kana: "へんぺいじょうひひしょさいぼうはいがん",
                },
                children: [],
              },
              {
                data: {
                  id: 1904,
                  en: "Non-Squamous Non-Small Cell Lung Cancer",
                  jp: "非扁平上皮非小細胞肺がん",
                  kana: "ひへんぺいじょうひひしょさいぼうはいがん",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        data: {
          id: 10,
          en: "Cervical Cancer",
          jp: "子宮頸がん",
          kana: "しきゅうけいがん",
        },
        children: [],
      },
      {
        data: {
          id: 2200,
          en: "Ovarian/Fallopian Tube/Peritoneal Cancer",
          jp: "卵巣・卵管・腹膜がん",
          kana: "らんそう・らんかん・ふくまくがん",
        },
        children: [
          {
            data: {
              id: 2201,
              en: "Ovarian/Fallopian Tube Cancer",
              jp: "卵巣・卵管がん",
              kana: "らんそう・らんかんがん",
            },
            children: [
              {
                data: {
                  id: 2203,
                  en: "Fallopian Tube Cancer",
                  jp: "卵管がん",
                  kana: "らんかんがん",
                },
                children: [],
              },
              {
                data: {
                  id: 22,
                  en: "Ovarian Cancer",
                  jp: "卵巣がん",
                  kana: "らんそうがん",
                },
                children: [],
              },
            ],
          },
          {
            data: {
              id: 2202,
              en: "Peritoneal Cancer",
              jp: "腹膜がん",
              kana: "ふくまくがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 35,
          en: "Uterine Cancer",
          jp: "子宮体がん",
          kana: "しきゅうたいがん",
        },
        children: [],
      },
      {
        data: {
          id: 3638,
          en: "Vaginal/Vulvar Cancer",
          jp: "膣・外陰部がん",
          kana: "ちつ・がいいんぶがん",
        },
        children: [
          {
            data: {
              id: 36,
              en: "Vaginal Cancer",
              jp: "膣がん",
              kana: "ちつがん",
            },
            children: [],
          },
          {
            data: {
              id: 38,
              en: "Vulvar Cancer",
              jp: "外陰部がん",
              kana: "がいいんぶがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 24,
          en: "Penile Cancer",
          jp: "陰茎がん",
          kana: "いんけいがん",
        },
        children: [],
      },
      {
        data: {
          id: 25,
          en: "Prostate Cancer",
          jp: "前立腺がん",
          kana: "ぜんりつせんがん",
        },
        children: [],
      },
      {
        data: {
          id: 31,
          en: "Testicular Cancer",
          jp: "精巣がん",
          kana: "せいそうがん",
        },
        children: [],
      },
      {
        data: {
          id: 49,
          en: "Germ Cell Tumor",
          jp: "胚細胞腫瘍",
          kana: "はいさいぼうしゅよう",
        },
        children: [
          {
            data: {
              id: 4901,
              en: "Teratoma",
              jp: "奇形種",
              kana: "きけいしゅ",
            },
            children: [],
          },
          {
            data: {
              id: 4902,
              en: "Yolk Sac Tumor",
              jp: "卵黄嚢腫瘍",
              kana: "らんおうのうしゅよう",
            },
            children: [],
          },
          {
            data: {
              id: 4903,
              en: "Embryonal Carcinoma",
              jp: "胎児性がん",
              kana: "たいじせいがん",
            },
            children: [],
          },
          {
            data: {
              id: 4904,
              en: "Choriocarcinoma",
              jp: "絨毛癌",
              kana: "じゅうもうがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 23,
          en: "Pancreatic Cancer",
          jp: "膵がん",
          kana: "すいがん",
        },
        children: [],
      },
      {
        data: { id: 27, en: "Sarcoma", jp: "肉腫", kana: "にくしゅ" },
        children: [
          {
            data: {
              id: 2701,
              en: "Soft Tissue Sarcoma",
              jp: "軟部組織肉腫",
              kana: "なんぶそしきにくしゅ",
            },
            children: [
              {
                data: {
                  id: 4106,
                  en: "Dermatofibrosarcoma Protuberans",
                  jp: "隆起性皮膚線維肉腫",
                  kana: "りゅうきせいひふせんいにくしゅ",
                },
                children: [],
              },
              {
                data: {
                  id: 9,
                  en: "Cardiac Tumor",
                  jp: "心臓腫瘍",
                  kana: "しんぞうしゅよう",
                },
                children: [],
              },
              {
                data: {
                  id: 37,
                  en: "Vascular Tumor",
                  jp: "血管腫瘍",
                  kana: "けっかんしゅよう",
                },
                children: [],
              },
            ],
          },
          {
            data: {
              id: 2702,
              en: "AIDS-Related Kaposi Sarcoma",
              jp: "エイズ関連カポジ肉腫",
              kana: "えいずかんれんかぽじにくしゅ",
            },
            children: [],
          },
        ],
      },
      {
        data: { id: 28, en: "Skin Cancer", jp: "皮膚がん", kana: "ひふがん" },
        children: [
          {
            data: {
              id: 2801,
              en: "Non-Melanoma Skin Cancers",
              jp: "非メラノーマ性皮膚がん",
              kana: "ひめらのーませいひふがん",
            },
            children: [
              {
                data: {
                  id: 2802,
                  en: "Basal Cell Skin Cancer",
                  jp: "基底細胞皮膚がん",
                  kana: "きていさいぼうひふがん",
                },
                children: [],
              },
              {
                data: {
                  id: 2803,
                  en: "Squamous Cell Skin Cancer",
                  jp: "扁平上皮皮膚がん",
                  kana: "へんぺいじょうひひふがん",
                },
                children: [],
              },
              {
                data: {
                  id: 4107,
                  en: "Merkel Cell Carcinoma",
                  jp: "メルケル細胞がん",
                  kana: "めるけるさいぼうがん",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        data: { id: 43, en: "Melanoma", jp: "黒色腫", kana: "こくしょくしゅ" },
        children: [
          {
            data: {
              id: 4301,
              en: "Cutaneous Melanoma",
              jp: "皮膚黒色腫",
              kana: "ひふこくしょくしゅ",
            },
            children: [],
          },
          {
            data: {
              id: 4302,
              en: "Uveal Melanoma",
              jp: "ブドウ膜黒色腫",
              kana: "ぶどうまくこくしょくしゅ",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 33,
          en: "Thyroid Cancer",
          jp: "甲状腺癌",
          kana: "こうじょうせんがん",
        },
        children: [
          {
            data: {
              id: 3301,
              en: "Anaplastic Thyroid Cancer",
              jp: "甲状腺未分化がん",
              kana: "こうじょうせんみぶんかがん",
            },
            children: [],
          },
          {
            data: {
              id: 3302,
              en: "Medullary Thyroid Cancer",
              jp: "甲状腺髄様がん",
              kana: "こうじょうせんずいようがん",
            },
            children: [],
          },
          {
            data: {
              id: 3303,
              en: "Differentiated Thyroid Cancer",
              jp: "甲状腺分化がん",
              kana: "こうじょうせんぶんかがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 32,
          en: "Thymoma/Thymic Cancer",
          jp: "胸腺腫・胸腺がん",
          kana: "きょうせんしゅ・きょうせんがん",
        },
        children: [],
      },
      {
        data: {
          id: 42,
          en: "Gastrointestinal Stromal Tumor",
          jp: "消化管間質腫瘍",
          kana: "しょうかかんかんしつしゅよう",
        },
        children: [],
      },
      {
        data: {
          id: 44,
          en: "Mesothelioma",
          jp: "中皮種",
          kana: "ちゅうひしゅ",
        },
        children: [],
      },
      {
        data: {
          id: 4647,
          en: "Neuroendocrine Tumor/Carcinoma",
          jp: "神経内分泌腫瘍・がん",
          kana: "しんけいないぶんへいしゅよう・がん",
        },
        children: [
          {
            data: {
              id: 46,
              en: "Neuroendocrine Tumor",
              jp: "神経内分泌腫瘍",
              kana: "しんけいないぶんへいしゅよう",
            },
            children: [],
          },
          {
            data: {
              id: 47,
              en: "Neuroendocrine Carcinoma",
              jp: "神経内分泌がん",
              kana: "しんけいないぶんぴつがん",
            },
            children: [],
          },
        ],
      },
      {
        data: {
          id: 48,
          en: "Peripheral Nervous System Cancer",
          jp: "末梢神経系腫瘍",
          kana: "まっしょうしんけいけいしゅよう",
        },
        children: [
          {
            data: {
              id: 4801,
              en: "Neuroblastoma",
              jp: "神経芽（細胞）腫",
              kana: "しんけいめ（さいぼう）しゅ",
            },
            children: [],
          },
        ],
      },

      {
        data: { id: 17, en: "Leukemia", jp: "白血病", kana: "はっけつびょう" },
        children: [
          {
            data: {
              id: 1701,
              en: "Acute Lymphoblastic Leukemia (Acute Lymphocytic Leukemia)",
              jp: "急性リンパ性白血病",
              kana: "きゅうせいりんぱせいはっけつびょう",
            },
            children: [],
          },
          {
            data: {
              id: 1702,
              en: "Acute Myeloid Leukemia",
              jp: "急性骨髄性白血病",
              kana: "きゅうせいこつずいせいはっけつびょう",
            },
            children: [],
          },
          {
            data: {
              id: 1703,
              en: "Chronic Myeloid Leukemia (Chronic myelogenous leukemia)",
              jp: "慢性骨髄性白血病",
              kana: "まんせいこつずいせいはっけつびょう",
            },
            children: [],
          },
          {
            data: {
              id: 1704,
              en: "Hairy Cell Leukemia",
              jp: "有毛細胞白血病",
              kana: "ゆうもうさいぼうはっけつびょう",
            },
            children: [],
          },
        ],
      },
      {
        data: { id: 20, en: "Lymphoma", jp: "リンパ腫", kana: "りんぱしゅ" },
        children: [
          {
            data: {
              id: 2001,
              en: "Hodgkin Lymphoma",
              jp: "ホジキンリンパ腫",
              kana: "ほじきんりんぱしゅ",
            },
            children: [],
          },
          {
            data: {
              id: 2002,
              en: "Non-Hodgkin's Lymphomas",
              jp: "非ホジキンリンパ腫",
              kana: "ひほじきんりんぱしゅ",
            },
            children: [
              {
                data: {
                  id: 2004,
                  en: "Waldenström's Macroglobulinemia / Lymphoplasmacytic Lymphoma",
                  jp: "ワルデンストレームマクログロブリン血症／リンパ形質細胞性リンパ腫",
                  kana: "わるでんすとれーむまくろぐろびんけっしょう／りんぱけいしつさいぼうせいりんぱしゅ",
                },
                children: [],
              },
              {
                data: {
                  id: 2005,
                  en: "B-Cell Lymphomas",
                  jp: "B細胞リンパ腫",
                  kana: "Bさいぼうりんぱしゅ",
                },
                children: [
                  {
                    data: {
                      id: 2008,
                      en: "Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma",
                      jp: "慢性リンパ球性白血病/小リンパ球性リンパ腫",
                      kana: "まんせいりんぱきゅうせいはっけつびょう／しょうりんぱきゅうせいりんぱしゅ",
                    },
                    children: [
                      {
                        data: {
                          id: 1705,
                          en: "Chronic Lymphocytic Leukemia",
                          jp: "慢性リンパ球性白血病",
                          kana: "まんせいりんぱきゅうせいはっけつびょう",
                        },
                        children: [],
                      },
                      {
                        data: {
                          id: 2003,
                          en: "Small Lymphocytic Lymphoma",
                          jp: "小リンパ球性リンパ腫",
                          kana: "しょうりんぱきゅうせいりんぱしゅ",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    data: {
                      id: 2009,
                      en: "Diffuse Large B-cell Lymphoma",
                      jp: "びまん性大細胞型B細胞リンパ腫",
                      kana: "びまんせいだいさいぼうがたBさいぼうりんぱしゅ",
                    },
                    children: [],
                  },
                ],
              },
              {
                data: {
                  id: 2006,
                  en: "Primary Cutaneous B-Cell Lymphomas",
                  jp: "原発性皮膚B細胞リンパ腫",
                  kana: "げんはつせいひふBさいぼうりんぱしゅ",
                },
                children: [],
              },
              {
                data: {
                  id: 2007,
                  en: "T-Cell Lymphomas",
                  jp: "T細胞リンパ腫",
                  kana: "Tさいぼうりんぱしゅ",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        data: {
          id: 21,
          en: "Multiple myeloma",
          jp: "骨髄腫症",
          kana: "こつずいしゅしょう",
        },
        children: [],
      },
      {
        data: {
          id: 4104,
          en: "Myelodysplastic Syndromes",
          jp: "骨髄異形成症候群",
          kana: "こつずいいけいせいしょうこうぐん",
        },
        children: [],
      },
      {
        data: {
          id: 4105,
          en: "Myeloproliferative Neoplasms",
          jp: "骨髄増殖性腫瘍",
          kana: "こつずいぞうしょくせいしゅよう",
        },
        children: [],
      },
      {
        data: {
          id: 4108,
          en: "Chronic Myelomonocytic Leukemia",
          jp: "慢性骨髄単球性白血病",
          kana: "まんせいこつずいたんきゅうせいはっけつびょう",
        },
        children: [],
      },
      {
        data: {
          id: 4109,
          en: "Polycythemia Vera",
          jp: "真正赤血球増加症",
          kana: "しんせいせっけっきゅうぞうかしょう",
        },
        children: [],
      },
      {
        data: {
          id: 4103,
          en: "Systemic Light Chain Amyloidosis",
          jp: "全身性ALアミロイドーシス",
          kana: "ぜんしんせいALアミロイドーシス",
        },
        children: [],
      },
      {
        data: {
          id: 39,
          en: "Unknown Primary, Carcinoma",
          jp: "原発不明がん",
          kana: "げんはつふめいがん",
        },
        children: [],
      },
      {
        data: {
          id: 41,
          en: "Other",
          jp: "その他のがん",
          kana: "そのほかのがん",
        },
        children: [],
      },
    ],
  };
  const transformForSelect = ({ data = {}, children = [] }) => {
    return {
      name: data.jp,
      value: data.id,
      children: children.map((c) => transformForSelect(c)),
    };
  };

  const options = transformForSelect(cancerTree);

  const ref = React.createRef();
  React.useEffect(() => {
    const treeselect = new Treeselect({
      parentHtmlContainer: ref.current,
      value: [],
      options: [options],
      isIndependentNodes: true,
      placeholder: "絞り込み",
    });
  });

  return (
    <div className="container">
      <Head>
        <title>Treeselect Sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Treeselect Sample" />
        <div ref={ref}></div>
      </main>
    </div>
  );
}
