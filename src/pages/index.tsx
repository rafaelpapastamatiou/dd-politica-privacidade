import { ReactNode, useState } from "react";
import { Box, Flex, Heading, Link, Portal, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import {
  MdFingerprint,
  MdOutlineCloudUpload,
  MdOutlineShield,
  MdPerson,
  MdInfoOutline,
  MdHelpOutline,
} from 'react-icons/md'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { AnimatePresence, motion } from 'framer-motion'

import { CategoriesRow } from "../components/Categories/CategoriesRow";
import { ContentContainer } from "../components/ContentContainer";
import { Spacer } from "../components/Spacer";
import { CategoryButton } from "../components/Categories/CategoryButton";
import { CategoryCard } from "../components/Categories/CategoryCard";
import { Title } from "../components/Title";
import { MotionIcon } from "../components/MotionIcon";

const disabledFilterProps = {
  backgroundColor: "rgba(0,0,0,0.7)",
}

export default function Home({}: NextPage) {
  const [selectedId, setSelectedId] = useState<Categories>()

  function handleChangeTab(tab: Categories | undefined) {
    setSelectedId(tab)
  }

  function handleCloseTab() {
    handleChangeTab(undefined)
  }

  const overflowY = selectedId
    ? "hidden"
    : "auto"

  const maxHeight = selectedId
    ? "100vh"
    : "auto"

  return (
    <>
      <Box
        minHeight="100vh"
        maxHeight={maxHeight}
        overflowX="hidden"
        overflowY={overflowY}
        onClick={handleCloseTab}
      >
        <ContentContainer>
          <Spacer y={8} />

          <Heading size='2xl' color='brand.500'>
            Connect Parking
          </Heading>

          <Spacer y={8} />

          <Heading size='lg' color='gray.200'>
            Política de Privacidade
          </Heading>

          <Heading size='sm' color='gray.500' >
            (Clique nos ícones abaixo para visualizar detalhes sobre cada tópico)
          </Heading>

          <CategoriesRow hasCategorySelected={!!selectedId}>
            <CategoryButton
              title={titles[Categories.INFO]}
              layoutId={Categories.INFO}
              icon={icons[Categories.INFO]}
              onClick={() => handleChangeTab(Categories.INFO)}
            />

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

            <CategoryButton
              title={titles[Categories.CONTACT]}
              layoutId={Categories.CONTACT}
              icon={icons[Categories.CONTACT]}
              onClick={() => handleChangeTab(Categories.CONTACT)}
            />
          </CategoriesRow>

          <Spacer y={8} />
        </ContentContainer>
      </Box>

      <Portal>
        <Box
          display="flex"
          position="fixed"
          w="100%"
          h="100%"
          top={0}
          left={0}
          alignItems="center"
          justifyContent="center"
          zIndex={999}
          pointerEvents={!selectedId ? "none" : "auto"}
          transition="all 0.2s"
          onClick={handleCloseTab}
          {...(selectedId ? disabledFilterProps : {})}
        >
          <AnimatePresence>
            {selectedId && (
              <CategoryCard
                key={"card"}
                layoutId={selectedId}
                icon={icons[selectedId]}
                title={titles[selectedId]}
                onClose={handleCloseTab}
              >
                {contents[selectedId]}
              </CategoryCard>
            )}
          </AnimatePresence>
        </Box>
      </Portal>
    </>
  )
}

enum Categories {
  DATA_COLLECTION = "DATA_COLLECTION",
  SECURITY = "SECURITY",
  STORAGE_AND_SHARING = "STORAGE_AND_SHARING",
  USER_RIGHTS = "USER_RIGHTS",
  INFO = "INFO",
  CONTACT = "CONTACT"
}

const icons = {
  [Categories.DATA_COLLECTION]: MdFingerprint,
  [Categories.SECURITY]: MdOutlineShield,
  [Categories.STORAGE_AND_SHARING]: MdOutlineCloudUpload,
  [Categories.USER_RIGHTS]: MdPerson,
  [Categories.INFO]: MdInfoOutline,
  [Categories.CONTACT]: MdHelpOutline
}

const titles = {
  [Categories.DATA_COLLECTION]: "Coleta de dados",
  [Categories.SECURITY]: "Segurança",
  [Categories.STORAGE_AND_SHARING]: "Armazenamento e compartilhamento",
  [Categories.USER_RIGHTS]: "Direitos do usuário",
  [Categories.INFO]: "Sobre",
  [Categories.CONTACT]: "Contato"
}

const PointIcon = () => (
  <MotionIcon
    as={VscDebugBreakpointLog}
    h={4}
    w={4}
    color="brand.500"
    my={0.5}
  />
)

interface RowProps {
  children: ReactNode;
}
function Row({
  children
}: RowProps) {
  return (
    <Flex
      align="flex-start"
      width="100%"
      as={motion.div}
      maxW="100%"
      flexWrap="wrap"
    >
      {children}
    </Flex>
  )
}

interface VRowProps {
  children: ReactNode;
}
function VRow({
  children
}: VRowProps) {
  return (
    <VStack
      as={motion.div}
      spacing={2}
      pl={6}
      maxW="100%"
      flexWrap="wrap"
      align="flex-start"
    >
      {children}
    </VStack >
  )
}

interface CardTextProps {
  children: ReactNode;
}
function CardText({
  children
}: CardTextProps) {
  return (
    <Text
      as={motion.span}
      fontSize={16}
      color="gray.200"
    >
      {children}
    </Text>
  )
}

interface MarkedTextProps {
  children: ReactNode;
}
function MarkedText({
  children
}: MarkedTextProps) {
  return (
    <Text
      as={motion.span}
      fontSize={18}
      fontWeight={600}
      color="brand.500"
    >
      {children}
    </Text>
  )
}

const contents = {
  [Categories.DATA_COLLECTION]: (
    <>
      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Quando e como coletamos seus dados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Seus dados, incluindo pessoais, são coletados por nós em 2 principais momentos:
            durante seu cadastro, onde coletamos alguns dados pessoais para que possamos
            identificá-lo e garantir que nossos serviços sejam prestados de forma correta, e
            durante o uso de nossa aplicação, onde alguns dados como a geolocalização podem ser coletados
            para fornecer algumas funções de conveniência, como recomendações baseadas na distância.
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Eu posso optar por não fornecer algum dado?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Sim. Nós buscamos coletar apenas dados essenciais para o funcionamento
            de nossos serviços, mas alguns dados pessoais são obrigatórios e precisam ser fornecidos,
            para garantir a identifição correta de nossos clientes e resguardar tanto nós quanto eles em
            caso de alguma eventualidade. No entanto, a coleta automática de alguns dados como a geolocalização pode ser
            desabilitada em nossa plataforma, porém isso irá resultar na interrupção de alguns
            serviços de conveniência.
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            O que garante a veracidade dos meus dados? E como posso atualizá-los?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Você é o responsável por fornecer dados verídicos e íntegros, além de poder
            solicitar a atualização deles através de nosso canal de atendimento ao cliente,
            no seguinte endereço:
          </CardText>
          <Link color="brand.500">https://connectparking.com.br/fale-conosco/lgpd</Link>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            De quem é a responsabilidade pelos dados coletados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Os dados coletados são armazenados e geridos por nós, sendo assim todo e
            qualquer uso, acesso ou compartilhamento é de nossa responsabilidade e, caso ocorra,
            estará dentro dos limites desta política de privacidade.
          </CardText>
        </VRow>
      </Box>
    </>
  ),
  [Categories.SECURITY]: (
    <>
      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Como garantimos a segurança de seus dados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Para garantir a segurança dos dados de nossos clientes adotamos uma
            série de medidas técnicas e de controle, desde protolocos de criptografia
            dos dados de nosso usuários até controles de acesso dos dados por parte de nossos colaboradores.
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Quem poderá acessar meus dados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Apenas colaboradores autorizados serão capazes de acessar seus dados, e para isso
            seguimos uma série de boas práticas e padrões de mercado visando mapear e identificar
            a real necessidade de acesso por parte de cada área da companhia, garantindo que nossos colaboradores,
            caso possam acessar dados, acessem apenas aquilo que é fundamental para exercício de sua função.
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Como funciona o acesso dos seus dados por parte de terceiros?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            É possível que empresas terceirizadas venham a acessar seus dados e realizar processamentos
            em cima deles, porém elas estarão sujeitas a obrigações contratuais, às nossas próprias normas
            internas de segurança da informação e a esta política de privacidade.
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Por quanto tempo iremos manter seus dados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Seus dados pessoais assim como registros de acesso serão armazenados de forma segura e controlada
            e mantidos de acordo com as seguintes premissas:<br /><br />

            <MarkedText>I</MarkedText>: Pelo prazo que durar a relação de prestação de serviços entre você e a Connect Parking;
            <br />
            <MarkedText>II</MarkedText>: Pelo período necessário para que possamos cumprir obrigações contratuais e eventuais
            obrigações legais que possam vir a ocorrer.<br /><br />

            Além disso, alguns dados podem ser armazenados por tempos superior devido a necessidades de
            auditorias internas e externas assim como possíveis verificações de fraudes e irregularidades,
            mas sempre de acordo com o que a lei ou norma regulatória estabelecer.
          </CardText>
        </VRow>
      </Box>
    </>
  ),
  [Categories.STORAGE_AND_SHARING]: (
    <>
      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Como armazenamos seus dados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Seus dados pessoais são armazenados em servidores na nuvem terceirizados que
            contratamos de alguns dos maiores fornecedores do mercado, garantindo assim
            uma grande resiliência, disponibilidade e segurança dos dados, em conjunto com
            nossas próprias políticas internas e protocolos de segurança. Estes servidores podem
            estar localizados tanto no Brasil quanto no exterior, então podem ocorrer transferências
            desses dados para fora do Brasil.
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Nós compartilhados seus dados?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Em alguns casos, é possível que ocorra o compartilhamento de alguns
            dados pessoais de nossos clientes com terceiros:<br /><br />

            <MarkedText>I</MarkedText>: Com organizações governamentais,
            administrativas ou autoridades judiciais, em caso de requerimentos, determinações,
            requisições ou ordens judiciais;
            <br /><br />
            <MarkedText>II</MarkedText>: Com provedores terceirizados, para realização
            de algum processamento ou de acordo com nossa infraestrutura tecnológica vigente;
            <br /><br />
            <MarkedText>III</MarkedText>: Com terceiros, de acordo com os Termos de Uso de nossas
            aplicações e esta política de privacidade.
          </CardText>
        </VRow>
      </Box>
    </>
  ),
  [Categories.USER_RIGHTS]: (
    <>
      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>Quais são os meus direitos?</Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Como o titular dos dados você possui alguns direitos:<br /><br />
            <MarkedText>I</MarkedText><CardText>: Solicitar a relação de quais dados possúimos sobre você;</CardText><br /><br />
            <MarkedText>II</MarkedText><CardText>: Atualizar seus dados pessoais;</CardText><br /><br />
            <MarkedText>II</MarkedText><CardText>: Solicitar a exclusão de seus dados pessoais;</CardText><br /><br />
            <MarkedText>V</MarkedText><CardText>: Em casos onde não for possível a completa exclusão
              de seus dados, solicitar a anonimização deles;</CardText><br /><br />
            <MarkedText>IV</MarkedText><CardText>: Revogar seu consentimento;</CardText><br /><br />
            <MarkedText>VI</MarkedText><CardText>: Verificar se estamos fazendo
              algum tipo de tratamento ou processamento em cima dos seus dados;</CardText><br /><br />
            <MarkedText>VII</MarkedText><CardText>: Solicitar a portabilidade de
              seus dados para outro provedor ou aplicação, e também a exportação deles;</CardText><br /><br />
            <MarkedText>VIII</MarkedText><CardText>: Contestar possíveis processamentos ou tratamentos dos dados;</CardText>
          </CardText>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Como posso exercer os meus diretos em relação aos meus dados pessoais?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Para consultar e realizar solicitações em relação aos seus dados pessoais,
            entre em contato com nossa central de atendimento ao cliente no seguinte
            endereço:
          </CardText>
          <Link color="brand.500">https://connectparking.com.br/fale-conosco/lgpd</Link>

          <CardText>
            Você também pode nos contatar diretamente através do nosso email:
          </CardText>
          <Link color="brand.500">faleconosco@connectparking.com.br</Link>
        </VRow>
      </Box>
    </>
  ),
  [Categories.INFO]: (
    <>
      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            O que é uma política de privacidade?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            A política de privacidade é um documento que tem a responsabilidade de
            esclarecer para o usuário como seus dados são coletados
            (direta ou indiretamente), processados, gerenciados e utilizados. Ela
            também é um termo jurídico, mas seu objetivo é transmitir ao usuário,
            de forma simples e acessível, todas as informações relacionadas aos seus
            dados e seus direitos em relação aos dados, de forma que leigos em direitos
            consigam compreender.
          </CardText>
        </VRow>
      </Box>
    </>
  ),
  [Categories.CONTACT]: (
    <>
      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            Como posso entrar em contato para tirar dúvidas relacionadas à prestação
            de serviços efetuada pela Connect Parking?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Você pode entrar em contato conosco através do nosso canal de
            atendimento ao cliente no seguinte endereço:
          </CardText>
          <Link color="brand.500">https://connectparking.com.br/fale-conosco</Link>

          <CardText>
            Além disso, você pode nos contatar diretamente através do nosso email:
          </CardText>
          <Link color="brand.500">faleconosco@connectparking.com.br</Link>
        </VRow>
      </Box>

      <Box>
        <Row>
          <PointIcon />
          <Spacer x={2} />
          <Title>
            A Connect Parking possui algum responsável por informar a
            respeito da atuação da empresa em relação à LGPD?
          </Title>
        </Row>

        <Spacer y={4} />

        <VRow>
          <CardText>
            Sim, possuímos um DPO (Encarregado de Proteção de Dados) que poderá
            esclarecer quaisquer dúvidas que você possa vir a ter, além de também
            ser o responsável por receber relatos a respeito de incidentes relacionados
            à segurança dos dados pessoais de nossos clientes. Você pode entrar em contato
            diretamente com nosso DPO através do seguinte email:
          </CardText>
          <Link color="brand.500">dpo@connectparking.com.br</Link>
        </VRow>
      </Box>
    </>
  )
}