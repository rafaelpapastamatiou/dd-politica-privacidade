import { useState } from "react";
import { Divider, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { MdFingerprint, MdOutlineCloudUpload, MdOutlineShield } from 'react-icons/md'

import { CategoriesRow } from "../components/Categories/CategoriesRow";
import { CategoryButton } from "../components/Categories/CategoryButton";
import { ContentContainer } from "../components/ContentContainer";
import { Spacer } from "../components/Spacer";
import { DataCollection } from "../components/CategoriesPages/DataCollection";

enum Categories {
  DATA_COLLECTION = "DATA_COLLECTION",
  SECURITY = "SECURITY",
  STORAGE_AND_SHARING = "STORAGE_AND_SHARING",
  USER_RIGHTS = "USER_RIGHTS"
}

const components = {
  [Categories.DATA_COLLECTION]: <DataCollection />,
  [Categories.SECURITY]: <></>,
  [Categories.STORAGE_AND_SHARING]: <></>,
  [Categories.USER_RIGHTS]: <></>
}

export default function Home({}: NextPage) {
  const [currentTab, setCurrentTab] = useState<Categories>(Categories.DATA_COLLECTION)

  function handleChangeTab(tab: Categories) {
    setCurrentTab(tab)
  }

  return (
    <ContentContainer>
      <Spacer y={8} />

      <Heading color='gray.200'>
        Política de privacidade
      </Heading>

      <Spacer y={8} />

      <CategoriesRow>
        <CategoryButton
          title="Coleta de dados"
          icon={MdFingerprint}
          onClick={() => handleChangeTab(Categories.DATA_COLLECTION)}
          selected={currentTab === Categories.DATA_COLLECTION}
        />

        <CategoryButton
          title="Segurança"
          icon={MdOutlineShield}
          onClick={() => handleChangeTab(Categories.SECURITY)}
          selected={currentTab === Categories.SECURITY}
        />

        <CategoryButton
          title="Armazenamento e compartilhamento"
          icon={MdOutlineCloudUpload}
          onClick={() => handleChangeTab(Categories.STORAGE_AND_SHARING)}
          selected={currentTab === Categories.STORAGE_AND_SHARING}
        />

        <CategoryButton
          title="Direitos do usuário"
          icon={MdFingerprint}
          onClick={() => handleChangeTab(Categories.USER_RIGHTS)}
          selected={currentTab === Categories.USER_RIGHTS}
        />
      </CategoriesRow>

      <Spacer y={4} />
      <Divider />
      <Spacer y={4} />

      {components[currentTab]}
    </ContentContainer>
  )
}