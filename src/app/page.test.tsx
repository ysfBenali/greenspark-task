import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

import { productWidgetListData } from '../../__tests__/mocks';

describe('Async Home Page', () => {
  it('renders Home page with Heading and ProductWidgetList component', async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(productWidgetListData),
        }) as Promise<Response>,
    );

    render(await HomePage());

    expect(
      screen.getByRole('heading', { name: /per product widgets/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
    expect(screen.getByTitle(/product widget list/i)).toBeInTheDocument();
  });
});
