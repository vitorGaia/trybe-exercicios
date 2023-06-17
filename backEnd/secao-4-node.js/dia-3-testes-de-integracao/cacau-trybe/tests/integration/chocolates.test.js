const app = require('../../src/app');

const chai = require('chai');

// o chai-http vai criar seu próprio listen(), escolher uma porta automaticamente, fazer a requisição ao endpoint e, por último, retornar o resultado dessa requisição.
const chaiHttp = require('chai-http');
const { it } = require('mocha');

const sinon = require('sinon');

const fs = require('fs').promises;

// o use "injeta" as funções de chaiHttp em chai.
chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

const chocolates = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

describe('Testando a API Cacau Trybe', function () {
  // stubs são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato.
  beforeEach(function () {
    sinon.stub(fs, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates');
  
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(chocolates);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade total de chocolates', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({ totalChocolates: 4 });
    })
  });

  describe('Usando o método GET em /chocolates/seach', function () {
    it('Retorna chocolates que contém "Mo" no nome', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.equal([
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ]);

      it('Retorna um array vazio se não encontrar nada', async function () {
        const response = await chai
        .request(app)
        .get('chocolates/search?name=zzz');

        expect(response.status).to.be.equal(404);
        expect(response.body).to.be.equal([]);
      })
    })
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/1')
        .send({
          name: 'Mint Pretty Good',
          brandId: 2,
        });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deeep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    })

    it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/555').send({
        name: 'Mint Pretty Good',
        brandId: 2,
        });
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'chocolate not found',
      });
    });
  });
});