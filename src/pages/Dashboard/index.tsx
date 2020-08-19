import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29331129?s=460&u=7418533caea3af1766504cc1c3c5496417bb0f3b&v=4"
            alt="Mateus Bez Fontana"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29331129?s=460&u=7418533caea3af1766504cc1c3c5496417bb0f3b&v=4"
            alt="Mateus Bez Fontana"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/29331129?s=460&u=7418533caea3af1766504cc1c3c5496417bb0f3b&v=4"
            alt="Mateus Bez Fontana"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
