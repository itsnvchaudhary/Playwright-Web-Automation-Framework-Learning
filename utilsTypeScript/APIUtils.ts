export class APIUtils {
  apiContext : any;
  loginPayload : string;
  constructor(apiContext : any ,loginPayload : string) {
    this.apiContext = apiContext;
    this.loginPayload = loginPayload;
  }

  async getToken() {
  const apiresponse = await this.apiContext.post(
    'https://rahulshettyacademy.com/api/ecom/auth/login',
    { data: this.loginPayload }
  );

  if (!apiresponse.ok()) {
    const body = await apiresponse.text();
    throw new Error(`Login failed (${apiresponse.status()}): ${body}`);
  }

  const json = await apiresponse.json();
  return json.token;
}

 async createOrder(orderPayload : string, token: string) {
  const apiresponse = await this.apiContext.post(
    'https://rahulshettyacademy.com/api/ecom/order/create-order',
    {
      data: orderPayload,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }
  );

  // ✅ Validate API result (important)
  if (!apiresponse.ok()) {
    const body = await apiresponse.text();
    throw new Error(`Create order failed (${apiresponse.status()}): ${body}`);
  }

  const json = await apiresponse.json();

  if (!json.orders || !json.orders.length) {
    throw new Error(`Invalid create-order response: ${JSON.stringify(json)}`);
  }

  return json.orders[0];
}

};

