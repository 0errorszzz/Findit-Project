import styled from 'styled-components';

const Wrapper = styled.section`
nav{
  width:var(--fluid-width);
  max-width:var(--max-width);
  margin:0 auto;
  height:var(--nav-height);
  display:flex;
  align-items:center;
  padding: 0 1rem;  // 根据需要调整内边距
  justify-content: space-between;
}
.page{
  min-height:calc(100vh -var(--nav-height));
  display:grid;
  align-items:center;
  margin-top:-3rem;
}
h1{
  font-weight:700;
  span{
    color:var(--primary-500);
  }
  margin-bottom:1.5rem;
}
p{
  line-height:2;
  color:var(--text-secondary-color);
  margin-bottom:1.5rem;
  max-width:35rem;
}
.register-link{
  margin-right:1rem;
}
.main-img{
  display:none;
}
.btn{
  padding:0.75rem 1rem;
}

@media(min-width:300px){
  .page{
    display: grid;
  grid-template-columns: 1fr 400px;
  column-gap: 3rem;
  justify-content: center; // 确保水平居中
  align-items: center; // 确保垂直居中
  min-height: calc(100vh - var(--nav-height));
  margin-top: 0; // 移除负边距，或根据需要进行调整
  }
  .logo {
    width: 200px; // 根据实际情况调整
    margin-right: 2rem;
    max-width: 150px; // 限制最大宽度
  height: auto; // 高度自动调整以保持比例
  width: 100%; // 确保宽度不超过容器宽度
  }
  h1 {
    font-size: 2.5rem; // 根据实际情况调整
  }
  .main-img{
    display:block;
  }
}
`;
export default Wrapper;
