export const GuideCode: Record<string, string> = {
  ProductList: `// 실험 영역 UI 정의
{!abtest.variables.enableFeature ? (
  <ProductComponent items={products} />
) : (
  <Swiper>
    {products.map((product) => (
      <div key={product.id}>
        <Product items={product} />
      </div>
    ))}
  </Swiper>
)}`,

  ProductView: `// 실험 영역 UI 정의
{abtest.variables.enableFeature ? (
  <CTAGroup new="true" size="lg">
    <CartButton new="true" onClick={addToCart}>
      <FaCartArrowDown />
    </CartButton>

    <DirectOrderButton new="true" onClick={onCheckout}>
      바로 구매
    </DirectOrderButton>
  </CTAGroup>
) : (
  <CTAGroup size="lg">
    <CartButton onClick={addToCart}>
      <FaCartArrowDown />
    </CartButton>

    <DirectOrderButton onClick={onCheckout}>
      구매하기
    </DirectOrderButton>
  </CTAGroup>
)}

// CTA Container
// ---------------
export const CTAGroup = styled(ButtonGroup)\`
  \${(props) =>
    props.new
      ? css\`
          width: 100%;
          padding: 15px;
        \`
      : css\`
          width: 100%;
          bottom: 0;
          background: #fff;
        \`}
\`;

// 장바구니 버튼 정의
// ---------------
export const CartButton = styled(Button)\`
\${(props) =>
  props.new
  ? css\`
      background: #4ad9af;
      border-color: #4ad9af;
      color: #fff;
      width: 10%;
      font-size: 14px;
      border-radius: 30px !important;
      font-weight: bold;
      &:hover {
        background: \${darken(0.1, '#4ad9af')};
        border-color: #4ad9af;
        color: yellow;
      }
    \`
    : css\`
      background: #4ad9af;
      border-color: #4ad9af;
      border-radius: 0 !important;
      color: #fff;
      width: 50%;
      &:hover {
        background: \${darken(0.1, '#4ad9af')};
        border-color: #4ad9af;
        color: yellow;
      }
    \`}
  \``,
};
