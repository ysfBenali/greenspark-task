import { fireEvent, render, screen } from '@testing-library/react';
import ProductWidgetList from '@/components/productWidgetList';

import { productWidgetListData } from '../../__tests__/mocks';

describe('ProductWidgetList', () => {
  it('should render correctly and display the correct number of ProductWidgets', () => {
    const { getAllByTitle } = render(
      <ProductWidgetList data={productWidgetListData} />,
    );

    const productWidgets = getAllByTitle(/.* widget$/i);
    expect(productWidgets.length).toBe(productWidgetListData.length);
  });

  it('should only allow one widget to be active at a time', async () => {
    render(<ProductWidgetList data={productWidgetListData} />);

    const switchButtons = screen.getAllByRole('switch');
    const [firstButton, ...otherButtons] = switchButtons;

    expect(firstButton).toBeChecked();
    otherButtons.forEach((btn) => expect(btn).not.toBeChecked());

    // Click on the second switch button
    fireEvent.click(otherButtons[0]);
    expect(otherButtons[0]).toBeChecked();
    expect(firstButton).not.toBeChecked();
    expect(otherButtons[1]).not.toBeChecked();
  });
});
