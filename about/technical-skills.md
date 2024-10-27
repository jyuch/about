---
title: Technical Skills
url: /technical-skills/
menu:
  visible: true
  order: 1
---


## Programming Languages

### C# / .NET Framework / .NET

仕事でメインに使用している言語その1です。

WinFormやWFP、ASP Coreを使用したWeb APIなど一通りの開発経験があります。

その中でも特にソースコードや式木・ILなど複数の領域でのメタプログラミングを得意としており、それらを組み合わせたプログラムの自動生成を得意としています。

MSBuildやNuGetなどのビルドエコシステムにもそれなりに精通しており、`.csproj`の手動での改変を含むカスタムビルドの定義などを行うことができます。

.NET Frameworkシリーズから.NETシリーズへのマイグレーションを行い、実際に稼働しているアプリケーションの乗せ換えを行った経験もあります。

それ以外にも、[Entity Framework Core を使用した経験](https://jyuch.hatenablog.com/entry/2022/10/02/162005)やパーサコンビネータライブラリを使用した独自フォーマットの解析などの経験もあります。

また、ソースコードを紛失したプログラムを`ildasm`→`ilasm`して無理やりpdbを生成し、WinDbgを駆使して強引にデバッグするなど活動は多岐に渡ります。

### Java / JVM

仕事でメインに使用している言語その2です。

主に Spring Framework を使用したWeb APIやWebアプリケーションの実装を行っています。

Maven や Gradle といったプロジェクトのビルド環境の整備・メンテナンス、AOPのフックポイントを使用したコードの省力化やリフレクションを使用した定型コードの削減が得意な分野となります。

また、プラットフォームとしてのJVMでは要件に応じたガベージコレクタモードの選定やパラメータのチューニング、Java Flight Recorderを使用してTomcatでのクラスローダに係るMetaspaceリークのトラブルシュートの経験があります。

一応 Oracle Certified Java Programmer, Gold SE 7 を持っています。

### Python

最近仕事で使っています。

### Rust

現在、個人的に最も興味を持って勉強している言語です。

コンソールアプリケーションや簡単なWebアプリケーション、[DNSベースのアドブロッカー](https://github.com/jyuch/advoid)などを実装するのに使用しています。

他の言語の良いところをバランスよくまとめた文法や、完成度の高いビルドエコシステムやパッケージマネージャ、C#やJavaと異なりコンパクトなシングルバイナリで動作するところがかなり気に入っています。

よく使う非同期ランタイムはTokioです。

### Scala

関数型言語の勉強として個人的に勉強していました。

また、[GitBucket](https://github.com/gitbucket/gitbucket)向けのバックアッププラグインのメンテナンスを行っていました。
それ以外にも、Alpakka のコネクタを作ったりもしていました。

今のところ最もOSSのコントリビューションを行っている言語です。

- [jyuch/gitbucket-backup-plugin](https://github.com/jyuch/gitbucket-backup-plugin)
- [maven central repository dev.jyuch](https://central.sonatype.com/namespace/dev.jyuch)

全体的に過去形になりつつある言語ですが、そろそろ復帰したいです。

## RDBMS

### PostgreSQL

業務及びプライベートで最も使用しているデータベースです。

内部構造に関してある程度の知識を有しており、統計情報コレクタの読み取りやそれに応じたパラメータチューニングなどの経験があります。

また、実行計画を基にしたインデックスチューニングなどのアプリケーション開発側の経験もあります。

### SQL Server / Oracle

実行計画の読み取りやそれに応じたインデックスチューニング、ヒント句を使用したクエリチューニングなど開発側の一通りの経験があります。

## Virtualization / Container

### Docker

イメージサイズ削減おじさんをやっていました。

Dockerfileやcompose.ymlなどは一通り書けます。

## Network

いわゆるOTネットワークを構築するために、ヤマハのRTXシリーズを使用したNAT及びパケットフィルタの設計と構築を行っています。

また、自宅ネットワークとして、アライドテレシスのx510とMikroTikを使用した10Gbpsネットワークを[構築・運用](https://jyuch.hatenablog.com/entry/2022/07/23/211721)しています。

## Git

日常の開発に使用するのはもちろん、メンバーへのGitの使用方法の啓蒙やブランチ運用計画の策定、トラブル発生時のリポジトリの修復などの経験があります。

たまに歴史改変作業をやったりしています。

## OS

### Windows Server

Tomcat及びPostgreSQLを構成し、社内向けのサービスを展開しています。

また、検証用途にAD・Enterprise CA・WSUS・Hyper-V高可用性クラスタの構築経験があります。

### Linux

Tomcat及びNginxを使用したアプリケーションサーバの構築や、PostgreSQLを使用したデータベースサーバの構築経験があります。

あとふつうに開発環境として使っています。

### FreeBSD

自宅のファイルサーバとして、FreeBSDをベースとしたアプライアンスであるXigmaNASを使用してファイルサーバを[構築・運用](https://jyuch.hatenablog.com/entry/2022/01/30/175006)しています。
