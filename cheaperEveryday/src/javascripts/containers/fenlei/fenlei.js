import React from 'react'
import Nav from '../../common/Nav'
import TodayHeader from '../WaiMai/components/WaiMaiHeader'
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '商品分类' },
  { title: '内部券类' },
  { title: '美文分类' },
  { title: '搭配分类' },
  { title: '店铺分类' },
  { title: '品牌分类' },
];

const Fenlei = () => (
  <div style={{ height: 600 }}>
  <TodayHeader/>
    <Tabs tabs={tabs}
      initalPage={'t1'}
    >
      <div style={{ display: 'flex', justifyContent: 'center', height: '85%', backgroundColor: '#fff' }}>
        		<ul className="goods_tab_fenlei_list">
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美食</li>
				</ul>
      </div>
      <div style={{ display: 'flex',justifyContent: 'center', height: '85%', backgroundColor: '#fff' }}>
        				<ul className="goods_tab_fenlei_list">
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美食</li>
				</ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', height: '85%', backgroundColor: '#fff' }}>
        				<ul className="goods_tab_fenlei_list">
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美食</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
				</ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', height: '85%', backgroundColor: '#fff' }}>
        				<ul className="goods_tab_fenlei_list">
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美食</li>
				</ul>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', height: '85%', backgroundColor: '#fff' }}>
        				<ul className="goods_tab_fenlei_list">
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>全部</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
				</ul>
      </div>
      <div style={{ display: 'flex',justifyContent: 'center', height: '85%', backgroundColor: '#fff' }}>
        				<ul className="goods_tab_fenlei_list">
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>全部</li>
					<li>服装</li>
					<li>女婴</li>
					<li>美妆</li>
					<li>鞋包 </li>
					<li>数码</li>
					<li>美食</li>
					<li>美食</li>
				</ul>
      </div>
    </Tabs>
    <Nav active={'fenlei'}/>
  </div>
);

	
export default Fenlei