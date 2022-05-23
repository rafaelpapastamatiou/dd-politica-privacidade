import { useState } from "react";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { MdFingerprint, MdOutlineCloudUpload, MdOutlineShield, MdPerson } from 'react-icons/md'
import { AnimatePresence } from 'framer-motion'

import { CategoriesRow } from "../components/Categories/CategoriesRow";
import { ContentContainer } from "../components/ContentContainer";
import { Spacer } from "../components/Spacer";
import { CategoryButton } from "../components/Categories/CategoryButton";
import { CategoryCard } from "../components/Categories/CategoryCard";

enum Categories {
  DATA_COLLECTION = "DATA_COLLECTION",
  SECURITY = "SECURITY",
  STORAGE_AND_SHARING = "STORAGE_AND_SHARING",
  USER_RIGHTS = "USER_RIGHTS"
}

const icons = {
  [Categories.DATA_COLLECTION]: MdFingerprint,
  [Categories.SECURITY]: MdOutlineShield,
  [Categories.STORAGE_AND_SHARING]: MdOutlineCloudUpload,
  [Categories.USER_RIGHTS]: MdPerson,
}

const titles = {
  [Categories.DATA_COLLECTION]: "Coleta de dados",
  [Categories.SECURITY]: "Segurança",
  [Categories.STORAGE_AND_SHARING]: "Armazenamento e compartilhamento",
  [Categories.USER_RIGHTS]: "Direitos do usuário",
}

const disabledFilterProps = {
  backgroundColor: "rgba(0,0,0,0.7)",
}

export default function Home({}: NextPage) {
  const [selectedId, setSelectedId] = useState<Categories>()

  function handleChangeTab(tab: Categories | undefined) {
    console.log("tab", tab)
    setSelectedId(tab)
  }

  return (
    <Box
      minHeight="100vh"
      overflowX="hidden"
      onClick={() => handleChangeTab(undefined)}
    >
      <ContentContainer>
        <Box
          display="flex"
          position="fixed"
          w="100%"
          h="100%"
          top={0}
          left={0}
          pointerEvents="none"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          zIndex={2}
          transition="all 0.2s"
          {...(selectedId ? disabledFilterProps : {})}
        >
          <AnimatePresence>
            {selectedId && (
              <CategoryCard
                key={"card"}
                layoutId={selectedId}
                icon={icons[selectedId]}
                title={titles[selectedId]}
              />
            )}
          </AnimatePresence>
        </Box>

        <Spacer y={8} />

        <Heading size='xl' color='brand.500'>
          Connect Parking
        </Heading>

        <Spacer y={8} />

        <Heading size='lg' color='gray.200'>
          O que é uma política de privacidade?
        </Heading>

        <Spacer y={2} />

        <Text color='gray.300' fontSize={18}>
          A política de privacidade é um documento que tem a responsabilidade de
          esclarecer para o usuário como seus dados são coletados
          (direta ou indiretamente), processados, gerenciados e utilizados. Ela
          também é um termo jurídico, mas seu objetivo é transmitir ao usuário,
          de forma simples e acessível, todas as informações relacionadas aos seus
          dados e seus direitos em relação aos dados, de forma que leigos em direitos
          consigam compreender.
        </Text>

        <Spacer y={2} />
        <Divider />
        <Spacer y={2} />

        <Heading size='lg' color='gray.200'>
          Nossa política de privacidade
        </Heading>

        <Heading size='sm' color='gray.500' >
          (Clique nos ícones abaixo para visualizar mais detalhes sobre cada tópico)
        </Heading>

        <CategoriesRow hasCategorySelected={!!selectedId}>
          <CategoryButton
            title={titles[Categories.DATA_COLLECTION]}
            layoutId={Categories.DATA_COLLECTION}
            icon={icons[Categories.DATA_COLLECTION]}
            onClick={() => handleChangeTab(Categories.DATA_COLLECTION)}
          />

          <CategoryButton
            title={titles[Categories.SECURITY]}
            layoutId={Categories.SECURITY}
            icon={icons[Categories.SECURITY]}
            onClick={() => handleChangeTab(Categories.SECURITY)}
          />

          <CategoryButton
            title={titles[Categories.STORAGE_AND_SHARING]}
            layoutId={Categories.STORAGE_AND_SHARING}
            icon={icons[Categories.STORAGE_AND_SHARING]}
            onClick={() => handleChangeTab(Categories.STORAGE_AND_SHARING)}
          />

          <CategoryButton
            title={titles[Categories.USER_RIGHTS]}
            layoutId={Categories.USER_RIGHTS}
            icon={icons[Categories.USER_RIGHTS]}
            onClick={() => handleChangeTab(Categories.USER_RIGHTS)}
          />
        </CategoriesRow>
        <Spacer y={8} />
      </ContentContainer>
    </Box>
  )
}