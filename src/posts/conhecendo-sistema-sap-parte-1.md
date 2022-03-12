---
title: "Conhecendo o sistema SAP - parte 1"
createdAt: "2022-03-11T10:00:00"
---

A SAP começou em 1972 na Alemanha e é atualmente a líder global de mercado em soluções de negócios colaborativos e multiempresas. Seu principal produto é sistema integrado de gestão empresarial, o SAP ERP.

ERP significa Enterprise Resource Planning. É o gerenciamento integrado dos principais processos de negócios, geralmente em tempo real e mediados por software e tecnologia.

## Evolução do produto

A primeira versão do produto, lançada em 1973, se chamava R/1 e era uma solução para computadores mainframe. Similarmente, a segunda versão, R/2 foi lançada em 1990. Já a terceira versão, R/3, foi lançada em 1991 para computadores Desktop, representando uma grande mudança no produto. Em 1999, houve outra grande mudança, com a mudança do nome para mySAP.com, oferecendo soluções para comércio eletrônico com os aplicativos ERP já existentes.

Em 2004 a SAP lançou a SAP NetWeaver, que são aplicativos de negócios que suportam processos de negócios ponta a ponta. Em 2006, foram lançados mais dois ERPs: SAP All-in-One e SAP Business One. O primeiro é o produto mais utilizado, suprindo uma necessidade de que empresas de médio porte também pudessem utilizar a ferramenta. SAP Business One é voltado para pequenas empresas. Em 2009 surge o SAP Business Suite 7, para melhorias e otimizações de desempenho, reduzindo custos de TI. Em 2015, a última grande mudança foi o lançamento do SAP S/4HANA, levando o sistema para a nuvem.

## Tipos de projeto SAP

Existem 4 tipos de projetos SAP mais comuns: Projeto de Implementação, Projeto de Rollout, Projeto de Upgrade e Projeto de Melhorias.

### Projeto de Implementação

A empresa não possui o ERP SAP. Depois de adquiri-lo junto a SAP Brasil, vai necessitar de configurá-lo para ser utilizado. O trabalho realizado é um Projeto de Implementação SAP.

### Projeto de Rollout

A empresa já possui o ERP SAP, porém alguma filial, por exemplo, ainda não está utilizando. O trabalho necessário para que essa nova filial venha a utilizar o ERP SAP estará num Projeto de Rollout SAP.

### Projeto de Upgrade

A empresa possui o ERP SAP já há algum tempo e está sendo orientada pela própria SAP a mudar para uma nova versão, onde terá valores agregados adicionais. O trabalho a ser realizado num caso desses é um Projeto de Upgrade SAP.

### Projeto de Melhorias

A empresa já possui o ERP SAP. Com a operação do mesmo no dia-a-dia são identificadas necessidades de alterações para a melhora de processos. O trabalho a ser realizado num caso desses é um Projeto de Melhorias SAP.

## Como nasce um Projeto de Melhorias SAP

Várias situações podem resultar num projeto de melhorias. Dentre elas:

- mudança em algum processo existente;
- atender mudanças na legislação;
- alterações no modelo de negócios da empresa;
- ativação de um módulo SAP;

Em um projeto de melhorias, primeiro identificam-se as necessidades. Alguém ou algum departamento as identificam, dada alguma motivação, alinham com os gestores e encaminham a solicitação para a equipe de TI.

Depois é realizada a análise de viabilidade. Verificam-se os impactos que esta alteração vai gerar, custos, tempo de implementação, se a equipe está disponível para realizá-la no momento e é feita uma priorização dos projetos.

Então, é realizada a contratação de fornecedores, para a execução da melhoria. Primeiro é elaborado um RFP (Request for Proposal), um documento com os requisitos contendo o que se espera desta melhoria. Depois, a RFP é publicada para que seja realizado um processo de cotação de preços e, por conseguinte, a escolha de um fornecedor. Neste momento a proposta é formalizada gerando a Proposta de Projeto, contendo: Escopo, Custo, Prazo, entre outras formalidades.

Por fim, é feita a composição do time responsável pelo projeto, definindo-se o Gerente de Projeto e quem serão os Usuários Chave, além do nível de atuação de cada um no projeto (part-time, full-time, alguns dias na semana...).

## ERP

O sistema SAP ERP é dividido em módulos. Uma empresa pode utilizar de um ou mais módulos do sistema. Os principais, e mais utilizados, módulos são:

- FI - Financial Accounting: planos de contas, contas a receber, contabilidade, etc;
- CO - Controlling: controladoria, controle de custos, análise de lucratividade, etc;
- MM - Materials Management: gestão de materiais (compras), contratos, pedidos, recebimentos, etc;
- PP - Production Planning: planejamento da produção, controle de produção, etc;
- SD - Sales and Distribution: vendas e distribuição, comercial, estoque, logística, etc;

A configuração de um módulo é realizada por um consultor funcional SAP especializado no módulo desejado. O consultor funcional é quem entende do módulo e que vai procurar entender como as regras de negócio e as necessidades da empresa podem ser configuradas dentro do sistema SAP.

Caso as configurações padrão do sistema não sirvam para adequar as necessidades da empresa apenas alterando os parâmetros disponíveis, entra em cena o consultor ABAP, para alterar o programa. ABAP é a linguagem de programação utilizada no SAP.

## Utilizando o sistema ERP

Após se autenticar no sistema, com login e senha, o usuário pode acessar a tela que deseja selecionando a opção no menu lateral, ou digitando o nome da transação desejada.

Transação é um código alfanumérico de 20 caracteres, utilizado para iniciar um processo no sistema SAP. Ex: FB50 (lançar conta do Razão), F.13 (compensação automática), etc.