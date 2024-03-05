// wykorzystanie różnych metod HTTP (GET/POST/etc)
describe("CRUD", () => {
  
  it("Status 200 for GET request", () => {
    cy.request("GET", "https://httpbin.org/get")
      .its("status")
      .should("eq", 200);
  });

  it("POST request for data", () => {
    const formData = {
      username: "testuser",
      password: "testpassword",
    };

    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      form: true,
      body: formData,
      timeout: 10000,
    })
      .its("body.form")
      .should("deep.equal", formData);
  });

    it("Update a resource with PUT request", () => {
    const updatedData = {
      key: "new-value",
    };

    cy.request("PUT", "https://httpbin.org/put", updatedData).should(
      (response) => {
        expect(response.status).to.equal(200);
        expect(response.body.json.key).to.equal(updatedData.key);
      }
    );
  });

    it("Using DELETE request", () => {
    cy.request("DELETE", "https://httpbin.org/delete")
      .its("status")
      .should("eq", 200);
  });
});

// wysyłanie i sprawdzanie nagłówków, zarówno standardowych (User-Agent), jak i niestandardowych
// standardowy 
describe("GET - API User-Agent", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/get",
    headers: {
      "User-Agent": "QATester",
    },
    failOnStatusCode: false,
  };

  it("User-Agent response", () => {
    cy.request(request).then((response) => {
      const currentStatus = response.status;
      const expectedStatus = 200;

      const currentUserAgentValue = response.requestHeaders['User-Agent']

      assert.equal('QATester', currentUserAgentValue);
      assert.equal(expectedStatus, currentStatus);

      cy.log(JSON.stringify(response.requestHeaders));
    });
  });
});

// niestandardowy
describe("httpbin header tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/get",
    headers: {
      customHeader: "customValue",
    },
    failOnStatusCode: false,
  };

  it('Custom header response', () => {
    const customHeader = 'Test-Header : customValue';
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'Test-Header': 'customValue',
      },
    }).then(response => {
          
          expect(response.requestHeaders['Test-Header']).to.include('customValue');
        });
      });
    });

// wysyłanie parametrów zapytania, w tym losowych
describe("httpbin tests", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/get",
    headers: {
      customHeader: "customValue",
    },
    failOnStatusCode: false,
  };

  it("random header testing", () => {
    cy.request(request).then((response) => {
      const currentStatus = response.status;
      const expectedStatus = 200;

      const currentHeaderValue = response.requestHeaders.customHeader;

      assert.equal("customValue", currentHeaderValue);
      assert.equal(expectedStatus, currentStatus);

      cy.log(response.requestHeaders);
      cy.log(JSON.stringify(response.requestHeaders));
    });
  });
});

// sprawdzanie treści odpowiedzi
describe('httpbin tests', () => {
  const request = {
    method: 'GET',
    url: 'https://httpbin.org/headers', 
    headers: {
        'Cookie': 'cookieName=cookieValue' 
    },
    failOnStatusCode: false 
}

it('test send cookie', () => {
  cy.request(request)
  .then(response => {
    assert.equal(200, response.status) /
    assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
    })
  })
})

// sprawdzanie czasu trwania wniosku
describe('Response time test', () => {
  const request = {
      method: 'GET',
      url: "https://httpbin.org/get",
      failOnStatusCode: false,
  }

  it('time duration', () => {
      cy.request(request).then(response => {
         assert.isTrue(response.duration <= 5000) 
      });
  });
});

