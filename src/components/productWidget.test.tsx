import { fireEvent, render } from '@testing-library/react';
import ProductWidget, {
  colorsMapping,
  measurementUnits,
} from '@/components/productWidget';

import { productWidgetListData } from '../../__tests__/mocks';

describe('ProductWidget Badge', () => {
  productWidgetListData.forEach((productData) => {
    it(`renders ${productData.type} widget Badge with correct data`, () => {
      const { getByText, getByTestId } = render(
        <ProductWidget data={productData} />,
      );
      const { id, amount, type, active, selectedColor, action, linked } =
        productData;

      expect(getByText(`This product ${action}`)).toBeInTheDocument();
      expect(
        getByText(`${amount} ${measurementUnits[type]}`),
      ).toBeInTheDocument();

      expect(getByTestId(`product-widget-badge-${id}`)).toHaveStyle({
        backgroundColor: colorsMapping?.[selectedColor],
      });
    });
  });
});

describe('ProductWidget Settings', () => {
  it('renders `link to public profile` and `checkbox` correctly', () => {
    const { getByRole } = render(
      <ProductWidget data={productWidgetListData[0]} />,
    );

    expect(
      getByRole('label', {
        name: /link to public profile/i,
      }),
    ).toBeInTheDocument();

    expect(
      getByRole('checkbox', {
        checked: true,
      }),
    ).toBeInTheDocument();
  });

  it('renders `badge color` and `color picker` correctly', () => {
    const { getByRole } = render(
      <ProductWidget data={productWidgetListData[0]} />,
    );

    expect(
      getByRole('label', {
        name: /badge color/i,
      }),
    ).toBeInTheDocument();
    expect(getByRole('radio-group')).toBeInTheDocument();
  });

  it('renders `activate badge` and `switch` correctly', () => {
    const { getByRole } = render(
      <ProductWidget data={productWidgetListData[0]} />,
    );

    expect(
      getByRole('label', {
        name: /activate badge/i,
      }),
    ).toBeInTheDocument();
    expect(getByRole('switch')).toBeInTheDocument();
  });
});

describe('check settings callbacks called correctly', () => {
  it('should dispatch `onActiveProductToggle`, `onProfileLinkToggle` and `onWidgetColorChange` correctly', () => {
    const onProfileLinkToggle = jest.fn();
    const onActiveProductToggle = jest.fn();
    const onWidgetColorChange = jest.fn();

    const { getByRole, getByLabelText, getByTestId } = render(
      <ProductWidget
        data={productWidgetListData[0]}
        onProfileLinkToggle={onProfileLinkToggle}
        onActiveProductToggle={onActiveProductToggle}
        onWidgetColorChange={onWidgetColorChange}
      />,
    );

    fireEvent.click(getByLabelText(/link to public profile/i));
    expect(onProfileLinkToggle).toHaveBeenCalledWith(
      productWidgetListData[0].id,
    );

    fireEvent.click(
      getByRole('label', {
        name: /activate badge/i,
      }),
    );
    expect(onActiveProductToggle).toHaveBeenCalledWith(
      productWidgetListData[0].id,
    );

    fireEvent.click(getByTestId('color-pick-blue')); // click on first color
    expect(onWidgetColorChange).toHaveBeenCalledWith(
      productWidgetListData[0].id,
      'blue',
    );

    fireEvent.click(getByTestId('color-pick-black')); // click on second color

    expect(onWidgetColorChange).toHaveBeenCalledWith(
      productWidgetListData[0].id,
      'black',
    );
  });
});
